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
              <div className="user-rating-radio">
                <input className="" style={cssScreen.userRating.radioMarginRight}  type="radio" name="rating" />
                <Rate className="start-gap star-text-gap" defaultValue={item.point} 
                  allowHalf
                  color="red"
                  max="5"
                  size="xxs"
                  readOnly />
                <label class="form-check-label point-gap" >{item.point.toFixed(1)}</label>
                <label class="form-check-label rating-font-size" >{item.title}</label>
              </div>
            )
          })}
          <div>
            <input style={{backgroundColor: 'red ', marginRight: "2%" }}  type="radio" name="rating" />
            <label>Any rating</label>
          </div>         
        </div>
      </div>
    </>
  );
}
export default UserRating;