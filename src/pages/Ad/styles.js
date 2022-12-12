import styled from 'styled-components'

export const AdBlock = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 16px;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const AdHeader = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr auto;
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`

export const AdName = styled.span``

export const AdAddress = styled.span`
  color: #2185d0;
`

export const AdPrice = styled.span`
  font-weight: bold;
  font-size: 20px;
`

export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MainInfoBlock = styled.div`
  flex: 1;
  &:first-child {
    margin-right: 16px;
  }
`

export const MainInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 4px;
  border-bottom: 1px solid #dededf;
  &:first-child {
    border-top: 1px solid #dededf;
  }
  & > span {
    flex: 1;
  }
  & > :last-child {
    font-weight: bold;
  }
`
export const Description = styled.div``
