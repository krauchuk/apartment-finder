import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  color: #8d8e8e;
  font-size: 14px;
  & > :not(:last-child)::after {
    content: '/';
    margin: 0 4px;
  }
`
export const Item = styled.div`
  &::first-letter {
    text-transform: capitalize;
  }
`
