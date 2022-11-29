import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`

export const AdDate = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background: black;
  color: white;
  opacity: 0.5;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const AdName = styled.h3``

export const AdPrice = styled.span``

export const AdRooms = styled.span``

export const AdAddress = styled.span``
