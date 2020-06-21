import React from 'react'
import config from '../../config'
import logo from '../assets/img/stocktake-icon.png'

export default function Header() {
  return (
    <div id="header">
      <img className="logo icon" src={logo} />
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </div>
  )
}
