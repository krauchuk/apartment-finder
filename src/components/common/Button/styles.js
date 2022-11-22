import styled from 'styled-components'

export const Button = styled.button`
  background-color: #2185d0;
  color: #ffffff;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  &:hover {
    background-color: #358dd0;
  }
  &:disabled {
    cursor: auto;
    background-color: black;
  }
`
