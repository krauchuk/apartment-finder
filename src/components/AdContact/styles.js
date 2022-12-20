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

export const Rating = styled.div`
  font-size: 12px;
  margin-right: 8px;
`

export const Star = styled.div`
  font-size: 14px;
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;
  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid;
  border-bottom-color: ${props => (props.active ? '#FC0' : '#dededf')};
  border-left: 0.3em solid transparent;
  &:before,
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0.6em;
    left: -1em;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid;
    border-bottom-color: ${props => (props.active ? '#FC0' : '#dededf')};
    border-left: 1em solid transparent;
    transform: rotate(-35deg);
  }
  &:after {
    transform: rotate(35deg);
  }
`
