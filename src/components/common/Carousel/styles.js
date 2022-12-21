import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: ${props => (props.fullscreen ? 'absolute' : 'relative')};
  ${props =>
    props.fullscreen &&
    css`
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 9999;
      background: black;
      & > :first-child {
        height: calc(100vh - 128px);
        text-align: center;
        cursor: auto;
        margin: 64px auto;
        img {
          height: auto;
          width: auto;
          max-height: 100%;
          max-width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    `}
`

export const ImageWrapper = styled.div`
  height: 600px;
  width: 100%;
  cursor: zoom-in;
`

export const PrevBtn = styled.div`
  top: 50%;
  position: absolute;
  margin: 16px;
`

export const NextBtn = styled.div`
  top: 50%;
  position: absolute;
  right: 0;
  margin: 16px;
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
  ${props =>
    props.fullscreen
      ? css`
          top: 16px;
          left: 16px;
        `
      : css`
          bottom: 16px;
          right: 16px;
        `}
  color: white;
  background: black;
  padding: 4px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0.75;
`

export const CloseBtn = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  button {
    background: #181818;
    font-size: 20px;
    &:hover {
      background: #2e2e2e;
    }
  }
`

export const Title = styled.div`
  color: white;
  position: absolute;
  top: 16px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding: 0 80px;
`
