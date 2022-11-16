import React from 'react'

import HeroImage from '../info/HeroImage'
import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

const HomePage = () => {
  const premiumAds = []

  return <>
    <HeroImage />
    <SearchBar />
    <AdList items={premiumAds} />
  </>
}

export default HomePage
