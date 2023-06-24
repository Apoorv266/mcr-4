import React from 'react'
import "../Styles/Pills.css"
const PillsComponent = ({key, item}) => {
  return (
    <div className='pills-main' key={key}>
      <p>{item}</p>
    </div>
  )
}

export default PillsComponent