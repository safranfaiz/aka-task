import React from 'react'
import { cssScreen } from '../../css/cssScreens'

class TypeSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      types: props.typeData
    }
  }

  render(){
    return(
      <div style={ cssScreen.outerCard }>
        <div>
          <div style={ cssScreen.typeFilter}>
            <p style={ cssScreen.typeFilter.wineTypePadding }>{ this.props.title }</p>
            <p className="infor-font-size">{ this.props.infor }</p>
          </div>
          <div className="row">
            {this.state.types.map(item => {
              return <p style={ cssScreen.typeFilter.textStyle }>{item}</p>
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default TypeSearch;