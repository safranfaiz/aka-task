import React from 'react';
import { shipCountry, language } from '../../data/properites';
import user from '../../assets/user.svg'
import cart from '../../assets/cart.svg'
import { cssHeader } from '../css/header'
import { Dropdown } from 'react-dropdown-now';
import '../css/common.css'
import 'react-dropdown-now/style.css';


class Options extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectCountry: '',
      selectLanguage: '',
      countryList: shipCountry,
      languageList: language,
      countryClick: false,
      languageClick: false
    }
  }

  getConutry = () => {
    this.setState({ countryClick: !this.state.countryClick, countryList: shipCountry })
  }

  hidePopup = () => {
    this.setState({countryClick: false, languageClick: false})
  }

  getLanguage = () => {
    this.setState({ languageClick: !this.state.languageClick, languageList: language })

  }


  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col" style={{display: "flex"}}>

          <div style={{  display: "flex", width: "45%" }}>
            <Dropdown
              placeholder="Ship to"
              options={this.state.countryList}
              value="one"
            />
            <Dropdown
              placeholder="Language"
              options={this.state.languageList}
              value="one"
              className="languarge-dropdown"
            />
          </div>

            <img style={cssHeader.heraderIcon} src={user}/>
            <img style={cssHeader.heraderIcon} src={cart}/>

          </div>
        </div>
      </div>
    )
  }
}

export default Options;