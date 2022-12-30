import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Button from '../Button'
import actions from '../../../actions'
import { Wrapper, Logo, Navigation, NavLink, Actions, Username } from './styles'

const Header = () => {
  const location = useLocation().pathname
  const dispatch = useDispatch()
  const username = useSelector(state => state.app.user.name)

  const showLogin = () => dispatch({ type: actions.TOGGLE_MODAL, payload: 'login' })

  return (
    <Wrapper>
      <Logo to="/">AFinder</Logo>
      <Actions>
        <Navigation>
          <NavLink to="/faq" state={{ active: location === '/faq' }}>
            FAQ
          </NavLink>
          <NavLink to="/contact" state={{ active: location === '/contact' }}>
            Contact Us
          </NavLink>
        </Navigation>
        {!username && <Button onClick={showLogin}>Login</Button>}
        {!!username && <Username to="/profile">{username}</Username>}
      </Actions>
    </Wrapper>
  )
}

export default Header
