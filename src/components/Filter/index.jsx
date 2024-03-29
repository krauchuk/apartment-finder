import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from '../common/Select'
import Input from '../common/Input'
import Button from '../common/Button'
import actionTypes from '../../actions'
import { Form, Fieldset, FieldsetLegend, ButtonWrapper } from './styles'

const Filter = ({ onSubmit }) => {
  const { adType, city, minPrice, maxPrice, rooms, minSquare, maxSquare, cities, loading } = useSelector(
    state => state.filter,
  )

  const [searchState, setSearchState] = useState({
    adType,
    city,
    minPrice,
    maxPrice,
    rooms,
    minSquare,
    maxSquare,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (!cities || !cities.length) {
      dispatch({ type: actionTypes.LOAD_CITIES })
    }
  }, [])

  useEffect(() => {
    if (!city) {
      setSearchState(old => ({ ...old, city: cities[0] }))
    }
  }, [cities])

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
      <Fieldset>
        <FieldsetLegend>Rooms</FieldsetLegend>
        <Select
          name="rooms"
          options={[
            { value: 0, text: 'any' },
            ...[1, 2, 3, 4, 5].map(r => ({ value: r, text: r })),
            { value: '5+', text: '5+' },
          ]}
          value={searchState.rooms}
          onChange={inputHandler}
          disabled={loading}
        />
      </Fieldset>
      <Fieldset>
        <FieldsetLegend>Square</FieldsetLegend>
        <Input
          value={searchState.minSquare}
          name="minSquare"
          type="number"
          placeholder="min square"
          onChange={inputHandler}
        />
        <Input
          value={searchState.maxSquare}
          name="maxSquare"
          type="number"
          placeholder="max square"
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
