import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../common/Button'
import actionTypes from '../../actions'
import { Wrapper } from './styles'

const Pagination = () => {
  const { pages } = useSelector(state => state.ads)
  const { page } = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const clickHandler = p => dispatch({ type: actionTypes.UPDATE_FILTER, payload: { page: p } })

  const buttonKeys = Array.from(Array(pages).keys(), k => k + 1)

  if (pages === 0) return null

  return (
    <Wrapper>
      {buttonKeys.map(key => (
        <Button key={key} text={key} onClick={() => clickHandler(key)} disabled={key === page} />
      ))}
    </Wrapper>
  )
}

export default Pagination
