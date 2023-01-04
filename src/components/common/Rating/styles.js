import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: 12px;
  margin-right: 8px;
`

export const Star = styled.div`
  font-size: ${props => `${props.$size}px`};
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;
  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid;
  border-bottom-color: ${props => (props.$active ? '#FC0' : '#dededf')};
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
    border-bottom-color: ${props => (props.$active ? '#FC0' : '#dededf')};
    border-left: 1em solid transparent;
    transform: rotate(-35deg);
  }
  &:after {
    transform: rotate(35deg);
  }
`
