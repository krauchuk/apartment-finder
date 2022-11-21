import React from 'react'
import { useLocation } from 'react-router-dom'

import { Wrapper, Logo, Navigation, NavLink } from './styles'

const Header = () => {
  const location = useLocation().pathname

  return (
    <Wrapper>
      <Logo>AFinder</Logo>
      <Navigation>
        <NavLink to="/" state={{ active: location === '/' }}>
          Home
        </NavLink>
        <NavLink to="/faq" state={{ active: location === '/faq' }}>
          FAQ
        </NavLink>
        <NavLink to="/contact" state={{ active: location === '/contact' }}>
          Contact Us
        </NavLink>
      </Navigation>
    </Wrapper>
  )
}

export default Header
