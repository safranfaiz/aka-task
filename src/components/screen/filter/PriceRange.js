import React, { useState }  from 'react'
import { cssScreen } from '../../css/cssScreens'
import { RangeSlider } from 'rsuite'
import "rsuite/dist/styles/rsuite-default.min.css";

const PriceRange = props => {

  const [priceValue, setPriceValue] = useState([props.priceRangeData.min, props.priceRangeData.max]);

  return (
    <>
      <div>
        <div style={ cssScreen.typeFilter}>
          <p style={ cssScreen.typeFilter.wineTypePadding }>{ props.title }</p>
        </div>
        <div>
          <div style={ cssScreen.priceRange.priceValue }>
            <div style={ cssScreen.priceRange.valueSeparator }>{ priceValue[0]+'€' }</div>
            <div>{ priceValue[1]+'€' } </div>
          </div>
          <div >
            <RangeSlider
              progress
              style={{ marginTop: 16 }}
              value={priceValue}
              onChange={value => {
                setPriceValue(value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default PriceRange;