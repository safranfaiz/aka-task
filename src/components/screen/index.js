import React from 'react'
import Filter from './filter/Filter'

const Screen = props => {
  // console.log(props)
  return(
    <div>
      <div className="row">
        {/* filters section */}
        <div className="col">
          <Filter filterData={props} />
        </div>

        {/* results section */}
        <div className="col">
        </div>
      </div>
    </div>
  )
}

export default Screen;

