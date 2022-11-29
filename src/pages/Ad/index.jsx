import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import actionTypes from '@actions'

import Spinner from '@components/common/Spinner'

import { Wrapper } from './styles'

const AdPage = () => {
  const { id } = useParams()
  const { selected, loading } = useSelector(state => state.ads)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_AD_REQUEST, payload: id })
  }, [dispatch, id])

  if (loading)
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )

  return <Wrapper>{selected.id}</Wrapper>
}

export default AdPage
