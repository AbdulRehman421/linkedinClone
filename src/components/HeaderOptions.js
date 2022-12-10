import React from 'react'
import './HeaderOptions.css'
const HeaderOptions = (props) => {

  return (
    <div className='headerOption'>
      {props.Icon && <props.Icon className='headerOption__icon'></props.Icon>}

      <h3 className='headerOption__title'>{props.title}</h3>
    </div>
  )
}

export default HeaderOptions