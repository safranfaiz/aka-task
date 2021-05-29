import React from 'react'

const NavigationBottom = props => {

  const data = props.data;

  return(
    <div className="col">
      <img src={data.img}/>
      <p>{data.title}</p>
    </div>
  )

}

export default NavigationBottom