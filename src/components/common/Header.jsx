import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <header>
    <div>AFinder</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  </header>
}

export default Header
