import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: ${props => (props.premium ? '#fff563' : 'white')};
  text-decoration: none;
  color: black;
`

export const AdDate = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: black;
  color: white;
  opacity: 0.5;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const AdPrice = styled.span`
  color: #4a4c50;
  & > span {
    font-size: 14px;
  }
`

export const Separator = styled.span`
  &::before {
    content: '/';
    margin: 0 4px;
  }
`

export const SizeBlock = styled.div`
  color: #4a4c50;
`
