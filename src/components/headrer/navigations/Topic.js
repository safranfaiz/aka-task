import React from 'react'
import { cssHeader } from '../../css/header'

class Topic extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      this.props.onHover ? (
        <p onMouseEnter={ this.props.onMouseEnter } 
          style={ cssHeader.marginRightForOptionSelect }> 
          <img src={ this.props.image } style={ cssHeader.navIcon }/> { this.props.name }
        </p>
      ) : (
        <p onMouseEnter={ this.props.onMouseEnter } 
          style={ cssHeader.marginRightForOptionUnselect }> 
          <img src={ this.props.image } style={ cssHeader.navIcon }/> { this.props.name }
        </p>

      )
    )
  }

}

export default Topic;