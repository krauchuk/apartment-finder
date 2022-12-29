import styled from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h2`
  text-align: center;
  padding-top: 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export const NoResults = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`
