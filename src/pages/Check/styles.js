import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Info = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: auto;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Title = styled.h1`
  border-bottom: 1px solid #dededf;
  padding-bottom: 16px;
`

export const Description = styled.div`
  color: #8d8e8e;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #2185d0;
`

export const Table = styled.table`
  border: 1px solid #dededf;
  border-radius: 4px;
  padding: 16px;
  td {
    padding: 8px;
  }
  th {
    padding: 8px 16px;
    border-bottom: 1px solid #dededf;
    & > :first-child {
      margin-bottom: 4px;
    }
  }
`

export const Price = styled.div`
  padding: 4px;
  border-radius: 4px;
  background: grey;
  color: white;
  max-width: fit-content;
  margin: auto;
`

export const Cross = styled.div`
  color: #ccc;
  text-align: center;
`

export const Tick = styled.div`
  color: #19b504;
  text-align: center;
`
