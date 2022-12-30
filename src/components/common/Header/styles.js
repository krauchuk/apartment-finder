import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #1b1c1d;
`

export const Logo = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
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

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    margin-left: 8px;
    height: 32px;
  }
`

export const Username = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 32px;
  color: white;
  margin-left: 8px;
  font-weight: bold;
  text-decoration: none;
`
