import React from 'react'

function Top(props) {
  return (
    <nav className={props.classed}>
      <span className='menus'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Join Us</a></li>
          <li><a href="/">More</a></li>
          <li><a href="/">More</a></li>
        </ul>
      </span>
    </nav>
  )
}

export default Top