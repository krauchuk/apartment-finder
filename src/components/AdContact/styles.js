import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const RatingBlock = styled.div`
  display: flex;
  align-items: center;
`

export const Phone = styled.a`
  display: block;
  font-size: 14px;
  text-decoration: none;
  color: #2185d0;
  text-align: center;
  &:hover {
    color: #18659f;
  }
`

export const Votes = styled.a`
  display: block;
  font-size: 14px;
  text-decoration: none;
  color: #2185d0;
  text-align: center;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    color: #18659f;
  }
`

export const Email = styled.a`
  display: block;
  padding: 8px;
  background: #2185d0;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  color: white;
  &:hover {
    background: #358dd0;
  }
`
