import React from 'react'

import HeroImage from '../info/HeroImage'
import AdList from '../ads/AdList'

const HomePage = () => {
  const premiumAds = []

  return <>
    <HeroImage />
    <AdList data={premiumAds} />
  </>
}

export default HomePage
