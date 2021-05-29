import React from 'react'
import { cssHeader } from '../../css/header'
import wineGlass from '../../../assets/glass-with-wine.svg'

class Wine extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="row">
        <p onMouseEnter={this.props.mouseHoverWine} 
          style={cssHeader.marginRightForOption}
          className="col"> 
          <img src={wineGlass} style={cssHeader.navIcon}/> Wines
        </p>
        <p onMouseEnter={this.mouseHover} 
          style={cssHeader.marginRightForOption}
          className="col"> 
          <img src={wineGlass} style={cssHeader.navIcon}/> Offers
        </p>
      </div>
    )
  }


}

export default Wine;