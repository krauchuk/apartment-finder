import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@components/common/Button'

import { UPDATE_FILTER } from '@constants/actions'

import { Wrapper } from './styles'

const Pagination = () => {
  const { pages } = useSelector(state => state.ads.regular)
  const { page } = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const clickHandler = p => dispatch({ type: UPDATE_FILTER, payload: { page: p } })

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
