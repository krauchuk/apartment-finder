import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Select from './common/Select'
import actionTypes from '../actions'

const Sorter = () => {
  const { field, order } = useSelector(state => state.filter.sort)

  const dispatch = useDispatch()

  const onChange = ({ target }) => dispatch({ type: actionTypes.UPDATE_FILTER, payload: { sort: target.value } })

  return (
    <Select
      options={[
        { value: 'date_asc', text: 'Date: new first' },
        { value: 'date_desc', text: 'Date: old first' },
        { value: 'price_asc', text: 'Prices: low first' },
        { value: 'price_desc', text: 'Prices: high first' },
      ]}
      value={`${field}_${order}`}
      onChange={onChange}
    />
  )
}

export default Sorter
