import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HeroImage from '../info/HeroImage'
import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

import { fetchPremiumAds } from '../../actions/ads'

const HomePage = () => {
  const premiumAds = useSelector(state => state.ads.premium.items)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => dispatch(fetchPremiumAds()), [dispatch])

  const searchHandler = useCallback(() => navigate('/ads'), [navigate])

  return (
    <>
      <HeroImage>
        <SearchBar onSubmit={searchHandler} />
      </HeroImage>
      <AdList items={premiumAds} title="Premium Ads" />
    </>
  )
}

export default HomePage
