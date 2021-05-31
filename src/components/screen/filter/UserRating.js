import React from 'react'
import { cssScreen } from '../../css/cssScreens'
import { Rate } from 'rsuite'
import "rsuite/dist/styles/rsuite-default.min.css";

const UserRating = props => {

  return (
    <>
      <div>
        <div style={ cssScreen.typeFilter}>
          <p style={ cssScreen.typeFilter.wineTypePadding }>{ props.title }</p>
        </div>
        <div>

          {props.userRatingData.map(item => {
            return (
              <div>
                <input style={cssScreen.userRating.radioMarginRight}  type="radio" name="rating" />
                <Rate defaultValue={item.point} 
                  allowHalf
                  color="red"
                  max="5"
                  size="xs"
                  readOnly />
                <label class="form-check-label" for="inlineRadio1">{item.title}</label>
              </div>
            )
          })}
          <div>
            <input style={{backgroundColor: 'red ', marginRight: "2%" }}  type="radio" name="rating" />
            <label class="form-check-label" for="inlineRadio1">Any rating</label>
          </div>         
        </div>
      </div>
    </>
  );
}
export default UserRating;