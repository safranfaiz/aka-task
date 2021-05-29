import React from 'react'
import SearchBox from './searchBox'
import Options from './Option'

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div className="row">
        <div className="col">
          <SearchBox/>
        </div> 
        <div className="col"></div>
        <div className="col">
          <Options/>
        </div>       
      </div>
    )
  }

}

export default Header;

