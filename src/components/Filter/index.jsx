import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from '@components/common/Select'
import Input from '@components/common/Input'
import Button from '@components/common/Button'

import { UPDATE_FILTER } from '@constants/actions'

import { Form, Fieldset, FieldsetLegend, ButtonWrapper } from './styles'

const cityOptions = [
  { value: 'krakow', text: 'Krakow' },
  { value: 'warsaw', text: 'Warsaw' },
  { value: 'wroclaw', text: 'Wroclaw' },
]

const Filter = ({ onSubmit }) => {
  const { adType, city, minPrice, maxPrice, rooms } = useSelector(state => state.filter)

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

    dispatch({ type: UPDATE_FILTER, payload: searchState })

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
        <Select name="city" options={cityOptions} value={searchState.city} onChange={inputHandler} />
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
        <Button type="submit" text="Find" />
      </ButtonWrapper>
    </Form>
  )
}

export default Filter
