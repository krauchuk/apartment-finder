import styled from 'styled-components'

export const AdBlock = styled.div`
  max-width: 1300px;
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

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  & > :first-child {
    flex: 1;
  }
  & > :last-child {
    min-width: 270px;
  }
`

export const AdAddress = styled.span`
  font-weight: bold;
`

export const AdPrice = styled.span`
  font-weight: bold;
  font-size: 20px;
  & > span::before {
    content: '/';
    margin: 0 8px;
  }
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
