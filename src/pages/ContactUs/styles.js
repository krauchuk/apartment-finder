import styled from 'styled-components'

export const ContactInfo = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Title = styled.h1`
  border-bottom: 1px solid #dededf;
  padding-bottom: 16px;
`

export const Description = styled.div`
  color: #8d8e8e;
`

export const PhoneList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const PhoneBlock = styled.div`
  max-width: 500px;
  min-width: 250px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  text-align: center;
  padding: 16px;
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`

export const PhoneOwner = styled.div`
  font-weight: bold;
`

export const Link = styled.a`
  text-decoration: none;
  color: #2185d0;
`

export const WorkingHours = styled.div`
  font-size: 14px;
`
