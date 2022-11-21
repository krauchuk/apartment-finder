import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Select from '../../common/Select'
import Input from '../../common/Input'
import Button from '../../common/Button'

import { RENT_TYPE, SALE_TYPE } from '../../../constants/search'
import { CHANGE_SEARCH_STATE } from '../../../constants/actions'

import { Form, Fieldset } from './styles'

const SearchBar = ({ onSubmit }) => {
  const { adType, city, minPrice, maxPrice } = useSelector(state => state.search)

  const dispatch = useDispatch()

  // use callback
  const inputHandler = ({ target }) =>
    dispatch({ type: CHANGE_SEARCH_STATE, field: target.name, payload: target.value })

  const submitHandler = event => {
    event.preventDefault()
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
          value={adType}
          onChange={inputHandler}
        />
        <Select
          name="city"
          options={[
            { value: 'krakow', text: 'Krakow' },
            { value: 'warsaw', text: 'Warsaw' },
            { value: 'wroclaw', text: 'Wroclaw' },
          ]}
          value={city}
          onChange={inputHandler}
        />
      </Fieldset>
      <Fieldset>
        <Input name="minPrice" type="number" value={minPrice} placeholder="min price" onChange={inputHandler} />
        <Input name="maxPrice" type="number" value={maxPrice} placeholder="max price" onChange={inputHandler} />
      </Fieldset>
      <Button type="submit" text="Find" />
    </Form>
  )
}

export default SearchBar
