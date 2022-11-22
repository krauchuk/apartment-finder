import React, { useState, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import Select from '@components/common/Select'
import Input from '@components/common/Input'
import Button from '@components/common/Button'

import { RENT_TYPE, SALE_TYPE } from '@constants/search'

import { Form, Fieldset } from './styles'

const cityOptions = [
  { value: 'krakow', text: 'Krakow' },
  { value: 'warsaw', text: 'Warsaw' },
  { value: 'wroclaw', text: 'Wroclaw' },
]

const SearchBar = ({ onSubmit }) => {
  const [params, setParams] = useSearchParams()
  const [searchState, setSearchState] = useState({
    adType: params.get('adType') || RENT_TYPE,
    city: params.get('city') || cityOptions[0].value,
    minPrice: params.get('minPrice'),
    maxPrice: params.get('maxPrice'),
  })

  const inputHandler = useCallback(({ target }) => setSearchState(old => ({ ...old, [target.name]: target.value })), [])

  const submitHandler = event => {
    event.preventDefault()
    setParams(searchState)
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
          value={searchState.adType}
          onChange={inputHandler}
        />
        <Select name="city" options={cityOptions} value={searchState.city} onChange={inputHandler} />
      </Fieldset>
      <Fieldset>
        <Input
          value={searchState.minPrice}
          name="minPrice"
          type="number"
          placeholder="min price"
          onChange={inputHandler}
        />
        <Input
          value={searchState.maxPrice}
          name="maxPrice"
          type="number"
          placeholder="max price"
          onChange={inputHandler}
        />
      </Fieldset>
      <Button type="submit" text="Find" />
    </Form>
  )
}

export default SearchBar
