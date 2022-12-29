import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    text-align: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dededf;
  }
`

export const Block = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const Head = styled.div`
  font-weight: bold;
  background-color: #e6e6e6;
  padding: 8px;
  cursor: pointer;
  z-index: 1;
`

export const Body = styled.div`
  padding: 8px;
`
