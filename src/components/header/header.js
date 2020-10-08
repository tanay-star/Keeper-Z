import React from 'react'
import './header.styles.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav-wrapper #ffca28 amber lighten-1">
      <div className="container">
        <Link to="/" className="brand-logo logo">
          Keeper
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
