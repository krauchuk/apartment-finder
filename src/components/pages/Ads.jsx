import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import SearchBar from '../search/SearchBar'
import AdList from '../ads/AdList'

import { fetchRegularAds } from '../../actions/ads'

const AdsPage = () => {
  const [params] = useSearchParams()

  const { items, loading } = useSelector(state => state.ads.regular)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRegularAds(params))
  }, [dispatch, params])

  return (
    <>
      <SearchBar />
      <AdList items={items} loading={loading} />
    </>
  )
}

export default AdsPage
