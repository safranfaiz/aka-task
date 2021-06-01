import React from 'react';
import { cssProduct } from '../../css/cssproduct';
import ReactCountryFlag from "react-country-flag"
import { Rate } from 'rsuite'
import "rsuite/dist/styles/rsuite-default.min.css";
import '../../css/common.css'


let hover = false

class Results extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: props.data,
      mouseHoverState: false
    }
   
  }

  mouseHoverState = (e) => {
    hover = !hover;
    if(hover){
      e.target.style.textDecoration= 'underline';
      e.target.style.cursor = "pointer"
    }else{
      e.target.style.textDecoration= 'none';
    }
  }

  loadByUserRating = (userRating) => {

    if(userRating.type === "rating") {
      return (
        <div className="usesr-rating-for-product">
          <p>
          <span className="user-rating-text-point">
            <Rate className="start-gap" defaultValue={userRating.point} 
              allowHalf
              color="#f0a40a"
              max="1"
              size="xxs"
              readOnly />
              {userRating.point.toFixed(1)}
          </span> <span className="user-rating-text">{userRating.description}</span> </p> 
        </div>
      )
    }

    if(userRating.type === "none") {
      return null;
    }

    if(userRating.type === "text") {
      return (
        <div className="usesr-rating-by-text">
          <p><span>{userRating.description}</span></p>
        </div>
      );
    }

  }

  render(){
    
    return(
      <div style={ cssProduct.outerCard }>
      {this.state.data.map(items => {
        return (
          <div className="row" style={ cssProduct.contentDiv }>
            <div className="col bottle-image-gap" style={ cssProduct.bottleImageDiv }>
              <img style={ cssProduct.imageBottle } src={items.location.image}/>
            </div> 
            <div className="col">
              <div className="row table-gap" style={ cssProduct.tableWidth }>
                <table>
                  <tr>
                    <td><p style={ cssProduct.textMargin }>{ items.brand }</p></td>
                  </tr>
                  <tr>
                    <td><p style={ cssProduct.nameHiglight }>{ items.name }</p></td>
                  </tr>
                  <tr>
                    <td>
                      <p style={ cssProduct.textMargin }>
                        <ReactCountryFlag
                          countryCode={items.location.countryCode}
                          svg
                          style={ cssProduct.counryFlag }
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title={items.location.countryCode}/> Red wine from <a onMouseOver={this.mouseHoverState} onMouseLeave={this.mouseHoverState}> <span>{ items.location.countryState } </span></a> · <a onMouseOver={this.mouseHoverState} onMouseLeave={this.mouseHoverState}> <span>{ items.location.countryName }</span></a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={ cssProduct.ratingNumber }>{items.rating.point}</p>
                      <p>
                        <Rate className="start-gap" defaultValue={items.rating.point} 
                          allowHalf
                          color="red"
                          max="5"
                          size="xxs"
                          readOnly />
                      </p>
                      <p style={ cssProduct.ratingCount }>{items.rating.count} ratings</p>
                      <p className="price" style={ !items.price.sold ? cssProduct.priceButton : cssProduct.soldText }>{ !items.price.sold ? items.price.amount+" "+items.price.code : 'Sold out' }</p>
                    </td>
                  </tr>
                </table>
              </div>
              
            </div>   
            <div className="col">{ this.loadByUserRating(items.userRating) }</div>    
          </div>
        )
        })}
        </div>
      
    )
  }

}


export default Results;