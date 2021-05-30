import React from 'react'
import { cssScreen } from '../../css/cssScreens'

class GrapesSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grapes: props.grapesData
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
          <input type="input" placeholder="Search grapes"/>
        </div>
        <div style={ cssScreen.typeFilter.grapesTop } className="row">
          {this.state.grapes.map(item => {
            return <p style={ cssScreen.typeFilter.textStyleGrapes }>{item}</p>
          })}
          </div>
      </div>
    )
  }

}

export default GrapesSearch;
