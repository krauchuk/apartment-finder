import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from '@components/common/Select'
import Input from '@components/common/Input'
import Button from '@components/common/Button'

import actionTypes from '@actions'

import { Form, Fieldset, FieldsetLegend, ButtonWrapper } from './styles'

const Filter = ({ onSubmit }) => {
  const { adType, city, minPrice, maxPrice, rooms } = useSelector(state => state.filter)
  const { loading, cities } = useSelector(state => state.app)

  const [searchState, setSearchState] = useState({
    adType,
    city,
    minPrice,
    maxPrice,
    rooms,
  })

  const dispatch = useDispatch()

  const inputHandler = ({ target }) => setSearchState(old => ({ ...old, [target.name]: target.value }))

  const submitHandler = event => {
    event.preventDefault()

    dispatch({ type: actionTypes.UPDATE_FILTER, payload: searchState })

    if (onSubmit) onSubmit()
  }

  return (
    <Form onSubmit={submitHandler}>
      <Fieldset>
        <Select
          name="adType"
          options={[
            { value: 'rent', text: 'Rent' },
            { value: 'sale', text: 'Sale' },
          ]}
          value={searchState.adType}
          onChange={inputHandler}
        />
        <Select
          name="city"
          options={cities.map(c => ({ value: c, text: c }))}
          value={searchState.city}
          onChange={inputHandler}
          disabled={loading}
        />
      </Fieldset>
      <Fieldset>
        <FieldsetLegend>Price</FieldsetLegend>
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
      <ButtonWrapper>
        <Button type="submit" text="Find" disabled={loading} />
      </ButtonWrapper>
    </Form>
  )
}

export default Filter
