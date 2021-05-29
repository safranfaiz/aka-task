import React from 'react'
import SearchBox from './searchBox'
import Options from './Option'
import Navigation from './Navigation'

class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col">
            <SearchBox/>
          </div> 
          <div className="col"></div>
          <div className="col">
            <Options/>
          </div>       
        </div>
        <div className="row">
          <Navigation />
        </div>
      </div>
    )
  }

}

export default Header;

