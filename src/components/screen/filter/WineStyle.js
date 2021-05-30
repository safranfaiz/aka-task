import React from 'react'
import { cssScreen } from '../../css/cssScreens'

class WineStyle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wineStyle: props.wineStyleData
    }
  }

  render(){
    return(
      <div>
        <div style={ cssScreen.typeFilter}>
            <p style={ cssScreen.typeFilter.wineTypePadding }>{ this.props.title }</p>
            <p>{ this.props.infor }</p>
          </div>
        <div>
          <input type="input" placeholder="Search wine styles"/>
        </div>
        <div style={ cssScreen.typeFilter.grapesTop } className="row">
          {this.state.wineStyle.map(item => {
            return <p style={ cssScreen.typeFilter.textStyleGrapes }>{item}</p>
          })}
          </div>
      </div>
    )
  }

}

export default WineStyle;
