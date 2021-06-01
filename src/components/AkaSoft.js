import React from 'react';
import Header from '../components/headrer';
import Screen from '../components/screen';
import { TYPES, PRICE_RANGE, USER_RATING, GRAPES, RGIONS, COUNTRIES, WINE_STYLES, FOOD_PAIRING } from '../data/filters';
import { productData } from '../data/product'


class AkaSoft extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: TYPES,
      priceRange: PRICE_RANGE,
      userRating: USER_RATING,
      grapes: GRAPES,
      regions: RGIONS,
      countries: COUNTRIES,
      wineStyle: WINE_STYLES,
      foodPairing: FOOD_PAIRING,
      productData: productData
    }
  }

  render(){
    return(
      <>
        <Header/>
        <Screen 
          type={this.state.type}
          priceRange={this.state.priceRange}
          userRating={this.state.userRating}
          grapes={this.state.grapes}
          regions={this.state.regions}
          countries={this.state.countries}
          wineStyle={this.state.wineStyle}
          foodPairing={this.state.foodPairing}
          productData={this.state.productData}
          />
      </>
    )
  }
}

export default AkaSoft;