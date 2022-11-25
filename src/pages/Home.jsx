import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeroImage from '@components/info/HeroImage'
import Filter from '@components/Filter'
import AdList from '@components/ads/AdList'

import { fetchPremiumAds } from '@actions/ads'

import { UPDATE_FILTER } from '@constants/actions'

const HomePage = () => {
  const { items, loading } = useSelector(state => state.ads.premium)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch(fetchPremiumAds()), [dispatch])

  const searchHandler = () => {
    dispatch({ type: UPDATE_FILTER, payload: { page: 1 } })
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
