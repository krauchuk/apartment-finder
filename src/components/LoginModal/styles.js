import styled from 'styled-components'

export const Title = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #dededf;
`

export const Form = styled.form`
  width: 100%;
  text-align: center;
  & > :not(:last-child) {
    margin-bottom: 16px;
  }
  input {
    padding: 16px;
    font-size: 16px;
  }
  button {
    padding: 16px 32px;
    font-size: 16px;
  }
`
