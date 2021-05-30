import React from 'react'
import { cssScreen } from '../../css/cssScreens'

class Country extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      country: props.countryData
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
          <input type="input" placeholder="Search countries"/>
        </div>
        <div style={ cssScreen.typeFilter.grapesTop } className="row">
          {this.state.country.map(item => {
            return <p style={ cssScreen.typeFilter.textStyleGrapes }>{item}</p>
          })}
          </div>
      </div>
    )
  }

}

export default Country;
