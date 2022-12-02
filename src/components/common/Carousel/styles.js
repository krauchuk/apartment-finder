import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  height: 600px;
  width: 100%;
`

export const ButtonBar = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 8px;
  opacity: 0.75;
`

export const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${props => (props.left ? 'rotate(135deg)' : 'rotate(-45deg)')};
`
export const Counter = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: white;
  background: black;
  padding: 4px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0.75;
`
