import React from 'react'

import '../Header/Header.css'

const Header = () => {
  return (
    <header className='header--container container'>
      <h1>PokeAPI</h1>
      <nav className='header--nav--container'>
        <ul className='header--nav'>
            <li className="header--nav-menu">menu 1</li>
            <li className="header--nav-menu">menu 2</li>
            <li className="header--nav-menu">menu 3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header