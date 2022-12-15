import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export const PageButtons = styled.div`
  margin-right: 16px;
  & > :not(:last-child) {
    margin-right: 4px;
  }
`

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SelectorTitle = styled.span`
  font-size: 14px;
  white-space: nowrap;
  margin-right: 4px;
`

export const PageSeparator = styled.span`
  font-size: 14px;
  padding: 8px;
`
