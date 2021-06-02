import React from 'react';
import Topic from './navigations/Topic';
import {cssHeader} from '../css/header';
import NavigationTable from './navigations/NavigationTable';
import * as Details from '../../data/navigation';
import wineGlass from '../../assets/glass-with-wine.svg'
import offer from '../../assets/offer.svg';
import pairings from '../../assets/pairings.svg';
import grapes from '../../assets/grapes.svg';
import regions from '../../assets/regions.svg';
import wine from '../../assets/wine.jpg'
import '../css/common.css'


class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      wineDetails: false,
      offerDetails: false,
      pairings: false,
      grapes: false,
      regions: false
    }
  }

  mouseHoverWine = () => {
    this.setState({
      wineDetails: true,
      offerDetails: false,
      pairings: false,
      grapes: false,
      regions: false
    })
  }

  mouseHoverOffer = () => {
    this.setState({
      offerDetails: true,
      wineDetails: false,
      pairings: false,
      grapes: false,
      regions: false
    })
  }

  mouseHoverPairings = () => {
    this.setState({
      pairings: true,
      offerDetails: false,
      wineDetails: false,
      grapes: false,
      regions: false
    })
  }

  mouseHoverGrapes = () => {
    this.setState({
      grapes: true,
      pairings: false,
      offerDetails: false,
      wineDetails: false,
      regions: false
    })
  }

  mouseHoverRegions = () => {
    this.setState({
      regions: true,
      grapes: false,
      pairings: false,
      offerDetails: false,
      wineDetails: false
    })
  }

  hidePopup = () => {
    this.setState({
      regions: false,
      grapes: false,
      pairings: false,
      offerDetails: false,
      wineDetails: false
    })
  }

  render(){
    return(
      <div>
        <div style={cssHeader.navBarBottomShadow} className="row" >
          <div className="col-sm-7">
            <div className="row navigation-links">

              <div className=""> 
                <Topic onMouseEnter={this.mouseHoverWine} 
                  name="Wine" 
                  image={wineGlass}
                  onHover={this.state.wineDetails} /> 

              </div>

              <div className="">
                <Topic onMouseEnter={this.mouseHoverOffer} 
                  name="Offers" 
                  image={offer}
                  onHover={this.state.offerDetails}/> 
              
              </div>

              <div className=""> 
                <Topic onMouseEnter={this.mouseHoverPairings} 
                  name="Pairings" 
                  image={pairings}
                  onHover={this.state.pairings}/> 
              </div>

              <div className=""> 
                <Topic onMouseEnter={this.mouseHoverGrapes} 
                  name="Grapes" 
                  image={grapes}
                  onHover={this.state.grapes}/> 
              </div>

              <div className=""> 
                <Topic onMouseEnter={this.mouseHoverRegions} 
                  name="Regions" 
                  image={regions}
                  onHover={this.state.regions}/> 
              </div>

            </div>
          </div>
          {/* <div className="col-5"></div> */}
        </div>

        <div style={cssHeader.popupBox.outerWidth} onMouseLeave={this.hidePopup}>
          {/* wine details navigtion popup */}
          {this.state.wineDetails && (
            <div style={cssHeader.navigationPopup}>
              <div className="row">
                <div className="col">
                  <NavigationTable 
                    title="Red"
                    rowData={Details.RED_DETAILS}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title="White"
                    rowData={Details.WHITE_DETAILS}/>
                </div>
                <div className="col">
                  <table>
                    {Details.TITLES_COMMON.map(item => {
                      return <thead style={cssHeader.tabelTitle}>{item}</thead>
                    })}
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.WINE_DETAILS_BOTTOM[0].title } </p> 
                    </div>
                  </p>
                </div>
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.WINE_DETAILS_BOTTOM[1].title } </p> 
                    </div>
                  </p>
                </div>
              </div>
              <p style={cssHeader.tabelTitle.links}>Browse all wines</p>

            </div>
          )}

          {/* offer details navigtion popup */}
          {
            this.state.offerDetails && (
              <div style={cssHeader.navigationPopup}>
                <div className="row">
                  <div className="col">
                    <NavigationTable 
                      title=""
                      rowData={Details.OFFER_1}/>
                  </div>
                  <div className="col">
                    <NavigationTable 
                      title=""
                      rowData={Details.OFFER_2}/>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col">
                    <p style={ cssHeader.marginTopForNavSubImg }> 
                      <div className="row">
                        <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                        <p className="col"> { Details.OFFER_DETAILS_BOTTOM[0] } </p> 
                      </div>
                    </p>
                  </div>
                  <div className="col">
                    <p style={ cssHeader.marginTopForNavSubImg }> 
                      <div className="row">
                        <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                        <p className="col"> { Details.OFFER_DETAILS_BOTTOM[1] } </p> 
                      </div>
                    </p>
                  </div>
                </div>
                <p style={cssHeader.tabelTitle.links}>All Offers</p>
              </div>
            )
          }

          {/* pairings details navigtion popup */}
          {this.state.pairings && (
            <div style={cssHeader.navigationPopup}>
              <div className="row"> 
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.PAIRINGS[0].data}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.PAIRINGS[1].data}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.PAIRINGS[2].data}/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.PAIRINGS[3].details[0].title } </p> 
                    </div>
                  </p>
                </div>
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.PAIRINGS[3].details[1].title } </p> 
                    </div>
                  </p>
                </div>
                </div>
            </div>
          )}

          {/* grapes details navigtion popup */}
          {this.state.grapes && (
            <div style={cssHeader.navigationPopup}>
              <div className="row"> 
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.GRAPES[0].data}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.GRAPES[1].data}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title=""
                    rowData={Details.GRAPES[2].data}/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.GRAPES[3].details[0].title } </p> 
                    </div>
                  </p>
                </div>
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.GRAPES[3].details[1].title } </p> 
                    </div>
                  </p>
                </div>
                </div>
            </div>
          )}

          {/* regions details navigtion popup */}
          {this.state.regions && (
            <div style={cssHeader.navigationPopup}>
              <div className="row">
                <div className="col">
                  <NavigationTable 
                    title={ Details.REGIONS[0].title }
                    rowData={ Details.REGIONS[0].data }/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title={ Details.REGIONS[1].title }
                    rowData={ Details.REGIONS[1].data }/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title={ Details.REGIONS[2].title }
                    rowData={ Details.REGIONS[2].data }/>
                </div>
                <div className="col">
                  <table>
                    {Details.REGIONS[3].titleCommon.map(item => {
                      return <thead style={cssHeader.tabelTitle}>{item}</thead>
                    })}
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }>
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.REGIONS[3].details[0].title } </p> 
                    </div> 
                  </p>
                </div>
                <div className="col">
                  <p style={ cssHeader.marginTopForNavSubImg }> 
                    <div className="row">
                      <img className="col-sm-4" src={ wine } style={ cssHeader.marginTopForNavSubImg.img } />
                      <p className="col"> { Details.REGIONS[3].details[1].title } </p> 
                    </div>
                  </p>
                </div>
              </div>
              <p style={cssHeader.tabelTitle.links}>{ Details.REGIONS[3].link }</p>

            </div>
          )}
          
        </div>
      </div>
    )
  }


}

export default Navigation;