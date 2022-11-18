import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HeroImage from '../info/HeroImage'
import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

import { fetchPremiumAds } from '../../actions/ads'

function HomePage() {
  const premiumAds = useSelector(state => state.ads.premium.items)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPremiumAds())
  }, [dispatch])

  return (
    <>
      <HeroImage>
        <SearchBar />
      </HeroImage>
      <AdList items={premiumAds} title="Premium Ads" />
    </>
  )
}

export default HomePage
