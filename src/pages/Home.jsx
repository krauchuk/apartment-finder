import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeroImage from '@components/info/HeroImage'
import SearchBar from '@components/search/SearchBar'
import AdList from '@components/ads/AdList'

import { fetchPremiumAds } from '@actions/ads'

const HomePage = () => {
  const { items, loading } = useSelector(state => state.ads.premium)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch(fetchPremiumAds()), [dispatch])

  const searchHandler = () => navigate(`/ads${window.location.search}`)

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
