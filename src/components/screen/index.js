import React from 'react'
import Filter from './filter/Filter';
import Results from './result/Reuslts'

const Screen = props => {
  // console.log(props)
  return(
    <div className="screen-page">
      <div className="row">
        {/* filters section */}
        <div className="col-sm-4">
          <Filter filterData={props} />
        </div>

        {/* results section */}
        <div className="col">
          <Results data={props.productData}/>
        </div>
      </div>
    </div>
  )
}

export default Screen;

