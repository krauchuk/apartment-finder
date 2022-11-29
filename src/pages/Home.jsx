import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeroImage from '@components/HeroImage'
import Filter from '@components/Filter'
import AdList from '@components/ads/AdList'

import actionTypes from '@actions'

const HomePage = () => {
  const { items, loading } = useSelector(state => state.ads.premium)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch({ type: actionTypes.FETCH_PREMIUM_REQUEST }), [dispatch])

  const searchHandler = () => {
    dispatch({ type: actionTypes.UPDATE_FILTER, payload: { page: 1 } })
    navigate(`/ads${window.location.search}`)
  }

  return (
    <>
      <HeroImage>
        <Filter onSubmit={searchHandler} />
      </HeroImage>
      <AdList items={items} loading={loading} title="Premium Ads" />
    </>
  )
}

export default HomePage
