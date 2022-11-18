import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.footer`
  background: #1b1c1d;
  min-height: 250px;
  padding: 48px;
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  margin-right: 24px;
  border-right: 1px solid #323334;
`

export const ColumnTitle = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`

export const ColumnLink = styled(Link)`
  color: #8d8e8e;
  text-decoration: none;
  font-size: 14px;
  padding: 2px 0px;
  &:hover {
    color: white;
  }
`

export const Copyrights = styled.div`
  bottom: 48px;
  right: 48px;
  color: #8d8e8e;
  font-size: 14px;
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: end;
`
