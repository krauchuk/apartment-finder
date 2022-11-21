import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Select from '../../common/Select'
import Input from '../../common/Input'
import Button from '../../common/Button'

import { fetchRegularAds } from '../../../actions/ads'

import { adTypeOptions, cityOptions } from '../../../constants/search'
import { SET_AD_TYPE, SET_CITY, SET_MIN_PRICE, SET_MAX_PRICE } from '../../../constants/actionTypes/search'

import { Form, Fieldset } from './styles'

const inputActionTypes = {
  adType: SET_AD_TYPE,
  city: SET_CITY,
  minPrice: SET_MIN_PRICE,
  maxPrice: SET_MAX_PRICE,
}

function SearchBar({ openAdsPage }) {
  const adType = useSelector(state => state.search.adType)
  const city = useSelector(state => state.search.city)
  const minPrice = useSelector(state => state.search.minPrice)
  const maxPrice = useSelector(state => state.search.maxPrice)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputHandler = ({ target }) => {
    const actionType = inputActionTypes[target.name]

    if (actionType) {
      dispatch({ type: actionType, payload: target.value })
    }
  }

  const submitHandler = event => {
    event.preventDefault()

    dispatch(fetchRegularAds())

    if (openAdsPage) navigate('/ads')
  }

  return (
    <Form onSubmit={submitHandler}>
      <Fieldset>
        <Select name="adType" options={adTypeOptions} value={adType} onChange={inputHandler} />
        <Select name="city" options={cityOptions} value={city} onChange={inputHandler} />
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
