import React from 'react'

const SearchBar = () => {
  const submitHandler = event => {
    event.preventDefault()
  }

  return <form onSubmit={submitHandler}>
    <button type="submit">Find</button>
  </form>
}

export default SearchBar
