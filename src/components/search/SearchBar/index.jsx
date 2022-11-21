import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Select from '../../common/Select'
import Input from '../../common/Input'
import Button from '../../common/Button'

import { RENT_TYPE, SALE_TYPE } from '../../../constants/search'
import { CHANGE_SEARCH_STATE } from '../../../constants/actions'

import { Form, Fieldset } from './styles'

const SearchBar = ({ onSubmit }) => {
  const [searchState, setSearchState] = useState({})

  const dispatch = useDispatch()

  const inputHandler = useCallback(({ target }) => setSearchState(old => ({ ...old, [target.name]: target.value })), [])

  const submitHandler = event => {
    event.preventDefault()
    dispatch({ type: CHANGE_SEARCH_STATE, payload: searchState })
    if (onSubmit) onSubmit()
  }

  return (
    <Form onSubmit={submitHandler}>
      <Fieldset>
        <Select
          name="adType"
          options={[
            { value: RENT_TYPE, text: 'Rent' },
            { value: SALE_TYPE, text: 'Sale' },
          ]}
          onChange={inputHandler}
        />
        <Select
          name="city"
          options={[
            { value: 'krakow', text: 'Krakow' },
            { value: 'warsaw', text: 'Warsaw' },
            { value: 'wroclaw', text: 'Wroclaw' },
          ]}
          onChange={inputHandler}
        />
      </Fieldset>
      <Fieldset>
        <Input name="minPrice" type="number" placeholder="min price" onChange={inputHandler} />
        <Input name="maxPrice" type="number" placeholder="max price" onChange={inputHandler} />
      </Fieldset>
      <Button type="submit" text="Find" />
    </Form>
  )
}

export default SearchBar
