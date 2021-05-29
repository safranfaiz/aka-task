import React from 'react';
import logo from '../../assets/Vivino_Logo.jpg'
import {cssHeader} from '../css/header'

class SearchBox extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return (
      <>
        <div className="form-group row">
          <img
            src={logo}
            className="img-rounded col-4"
            alt="VIVINO LOGO"
            style={cssHeader.headerImg}
          />

          <input
            type="text"
            className="form-control col"
            style={cssHeader.circle}
            placeholder="Search any wine"
          />
        </div>
      </>
    );
  }

}

export default SearchBox;