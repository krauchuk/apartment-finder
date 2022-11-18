import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #1b1c1d;
`

export const Logo = styled.div`
  color: white;
  font-weight: bold;
`

export const Navigation = styled.nav``

export const NavLink = styled(Link)`
  padding: 8px;
  color: #bbbbbc;
  text-decoration: none;
  &:hover {
    color: white;
  }
  ${props =>
    props.state.active &&
    css`
      border-bottom: 1px solid white;
      color: white;
    `}
`
