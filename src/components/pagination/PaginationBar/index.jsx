import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Button from '@components/common/Button'

import { Wrapper } from './styles'

const Pagination = () => {
  const [params, setParams] = useSearchParams()

  const { pages } = useSelector(state => state.ads.regular)
  const buttonKeys = Array.from(Array(pages).keys(), k => k + 1)
  const page = +(params.get('page') || 1)

  const clickHandler = p => {
    params.set('page', p)
    setParams(params)
  }

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
