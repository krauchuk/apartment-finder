import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAdById } from '@actions/ads'

import Spinner from '@components/common/Spinner'

import { Wrapper } from './styles'

const AdPage = () => {
  const { id } = useParams()
  const { data, loading } = useSelector(state => state.ads.selected)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdById(id))
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
