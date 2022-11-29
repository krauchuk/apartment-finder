import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import actionTypes from '@actions'

import Spinner from '@components/common/Spinner'

import { Wrapper } from './styles'

const AdPage = () => {
  const { id } = useParams()
  const { data, loading } = useSelector(state => state.ads.selected)

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

  return <Wrapper>{data.id}</Wrapper>
}

export default AdPage
