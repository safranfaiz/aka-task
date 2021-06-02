import React from 'react'
import { cssHeader } from '../../css/header'
import '../../css/common.css'

const NavigationTable = props => {

  const { title, rowData } = props;

  return(
    <table>
      <thead className="nav-items" style={cssHeader.tabelTitle}> {title} </thead>
      {rowData.map(item =>{
        return <tr className="nav-items">{item}</tr>
      })}
    </table>
  )

}

export default NavigationTable;