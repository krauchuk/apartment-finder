import React from 'react'

import { Form, SubmitButton } from './styles'

function SearchBar() {
  const submitHandler = event => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler}>
      <SubmitButton>Find</SubmitButton>
    </Form>
  )
}

export default SearchBar
