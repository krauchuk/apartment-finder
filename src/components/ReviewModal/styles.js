import styled from 'styled-components'

export const List = styled.div`
  overflow: auto;
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dededf;
  }
`

export const Review = styled.div`
  display: flex;
  flex-wrap: wrap;
  h4 {
    width: 100%;
    margin-bottom: 8px;
  }
  & > div {
    display: flex;
    & > :last-child {
      flex: 1;
      margin-left: 16px;
    }
  }
`
