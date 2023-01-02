import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 16px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  padding: 32px;
  border-radius: 4px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
`

export const Close = styled.div`
  position: absolute;
  top: -32px;
  right: -32px;
  & > button {
    background: #181818;
    height: 32px;
    width: 32px;
    padding: 0;
    line-height: 32px;
    font-size: 16px;
    &:hover {
      background: #2e2e2e;
    }
  }
`
