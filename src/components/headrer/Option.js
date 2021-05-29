import React from 'react';
import DropDownList from './option/DropDownList'
import { shipCountry, language } from '../../data/properites';
import user from '../../assets/user.svg'
import cart from '../../assets/cart.svg'
import { cssHeader } from '../css/header'

class Options extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectCountry: '',
      selectLanguage: '',
      countryList: [],
      languageList: [],
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
      <>
        <div className="row">
          <div className="col">

            <DropDownList 
              labelName="Ship to"
              loadData={this.getConutry}
              data={this.state.countryList}
              visiblePopup={this.state.countryClick}
              hidePopup={this.hidePopup} />

            <DropDownList 
              labelName="Language"
              loadData={this.getLanguage}
              data={this.state.languageList}
              visiblePopup={this.state.languageClick}
              hidePopup={this.hidePopup} />
            
            <img style={cssHeader.heraderIcon} src={user}/>
            <img style={cssHeader.heraderIcon} src={cart}/>

          </div>
        </div>
      </>
    )
  }
}

export default Options;