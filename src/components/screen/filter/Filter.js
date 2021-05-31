import React from 'react'
import TypeSearch from './TypeSearch'
import GrapesSearch from './GrapesSearch'
import Regions from './Regions'
import Country from './Country'
import WineStyle from './WineStyle'
import FoodPairings from './FoodPairings'
import PriceRange from './PriceRange';
import UserRating from './UserRating'

class Filter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      typeData: this.props.filterData.type,
      priceRangeData: this.props.filterData.priceRange,
      userRatingData: this.props.filterData.userRating,
      grapesData: this.props.filterData.grapes,
      regionData: this.props.filterData.regions,
      countryData: this.props.filterData.countries,
      wineStyleData: this.props.filterData.wineStyle,
      foodPairingData: this.props.filterData.foodPairing
    }
    console.log("Filter >> ", props)

  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col">
            <TypeSearch 
              title="Wine Types" 
              typeData={this.state.typeData}
              infor="Select Multiple" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PriceRange 
               title="Price Range"
               priceRangeData={this.state.priceRangeData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UserRating 
               title="Vivino User Rating"
               userRatingData={this.state.userRatingData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GrapesSearch 
               title="Grapes"
               grapesData={this.state.grapesData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Regions 
               title="Regions"
               regionData={this.state.regionData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Country 
               title="Countries"
               countryData={this.state.countryData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WineStyle 
               title="Wine styles"
               wineStyleData={this.state.wineStyleData} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FoodPairings 
               title="Food pairings"
               foodPairingData={this.state.foodPairingData} />
          </div>
        </div>
        
      </div>
    )
  }

}

export default Filter;