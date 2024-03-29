import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  padding: 32px;
`

export const Sidebar = styled.div`
  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin-bottom: 16px;
  }
  margin-right: 32px;
  border-radius: 4px;
  border: 1px solid #dededf;
  padding: 16px;
  height: max-content;
`

export const Navigation = styled.div`
  a {
    padding: 8px;
  }
  & > :not(:last-child) {
    border-bottom: 1px solid #dededf;
  }
`

export const Tab = styled(Link)`
  display: block;
  font-size: 14px;
  text-decoration: none;
  color: #2185d0;
  text-align: center;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    color: #18659f;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
