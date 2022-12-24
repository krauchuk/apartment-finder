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

export const Packages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export const PackageBlock = styled.div`
  max-width: 500px;
  min-width: 250px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    padding: 4px;
  }
  ul {
    text-align: initial;
    list-style: none;
  }
  & > :last-child {
    font-weight: bold;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: end;
    margin-top: 16px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #2185d0;
`
