import styled from 'styled-components'

export const Box = styled.button`
  cursor: pointer;
  padding: 16px 16px 12px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: white;
  &:hover {
    background-color: #fbfbfb;
  }
`

export const Heart = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background-color: ${props => (props.$active ? 'red' : '#ababab')};
  &::before,
  &::after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: '';
    border-radius: 50%;
    background-color: ${props => (props.$active ? 'red' : '#ababab')};
  }
  &::before {
    bottom: 0px;
    left: -10px;
  }
  &::after {
    top: -10px;
    right: 0px;
  }
`
