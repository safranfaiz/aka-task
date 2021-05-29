import React from 'react'
import SearchBox from './searchBox'

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
        <div className="col">
        </div>       
      </div>
    )
  }

}

export default Header;

