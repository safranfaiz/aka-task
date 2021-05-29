import React from 'react'
import { cssHeader } from '../../css/header'

const NavigationTable = props => {

  const { title, rowData } = props;

  return(
    <table>
      <thead style={cssHeader.tabelTitle}> {title} </thead>
      {rowData.map(item =>{
        return <tr >{item}</tr>
      })}
    </table>
  )

}

export default NavigationTable;