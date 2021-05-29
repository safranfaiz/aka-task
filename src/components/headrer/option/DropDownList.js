import React from 'react';
import { cssHeader } from '../../css/header' ;
import Popup from './Popup';

class DropDownList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      visiblePopup: this.props.visiblePopup
    }
  }


  render(){
    const {visiblePopup, data, hidePopup} = this.props;
    return(
      <>
        <label 
          onClick={this.props.loadData} 
          style={cssHeader.marginRightForOption}
        > 
          {this.props.labelName} 
        </label>
        <Popup show={visiblePopup} data={data} onHide={hidePopup} />
        
      </>
    )
  }
}

export default DropDownList;