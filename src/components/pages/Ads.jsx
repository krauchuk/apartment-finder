import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

import { fetchRegularAds } from '../../actions/ads'

const AdsPage = () => {
  const ads = useSelector(state => state.ads.regular.items)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRegularAds())
  }, [dispatch])

  return (
    <>
      <SearchBar />
      <AdList items={ads} />
    </>
  )
}

export default AdsPage
