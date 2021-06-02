import React from 'react'
import SearchBox from './searchBox'
import Options from './Option'
import Navigation from './Navigation'
import { cssHeader } from '../css/header'
import '../css/common.css'

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="">
        <div className="row top-header-1">
          <div className="col">
            <SearchBox/>
          </div> 
          {/* <div className="col" ></div> */}
          <div className="col" >
            <Options/>
          </div>       
        </div>
        <div className="row">
          <div className="col"><Navigation /></div>
        </div>
        <div className="title-text">
          <h2 style={cssHeader.text.bannerFont}>Showing 26541 wines between €7 - €30 rated above 3.5 stars</h2>
        </div>
      </div>
    )
  }

}

export default Header;

