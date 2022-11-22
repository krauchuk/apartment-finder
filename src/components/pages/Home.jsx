import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeroImage from '../info/HeroImage'
import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

import { fetchPremiumAds } from '../../actions/ads'

const HomePage = () => {
  const { items, loading } = useSelector(state => state.ads.premium)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch(fetchPremiumAds()), [dispatch])

  const searchHandler = useCallback(() => navigate(`/ads${window.location.search}`), [navigate])

  return (
    <>
      <HeroImage>
        <SearchBar onSubmit={searchHandler} />
      </HeroImage>
      <AdList items={items} loading={loading} title="Premium Ads" />
    </>
  )
}

export default HomePage
