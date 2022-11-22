import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import SearchBar from '@components/search/SearchBar'
import AdList from '@components/ads/AdList'
import Pagination from '@components/pagination/PaginationBar'

import { fetchRegularAds } from '@actions/ads'

import { toObject } from '@helpers/query'

import { SearchWrapper } from './styles'

const AdsPage = () => {
  const [params] = useSearchParams()

  const { items, loading } = useSelector(state => state.ads.regular)

  const dispatch = useDispatch()

  useEffect(() => {
    const formattedParams = toObject(params.toString())
    dispatch(fetchRegularAds(formattedParams))
  }, [dispatch, params])

  return (
    <>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <AdList items={items} loading={loading} />
      <Pagination />
    </>
  )
}

export default AdsPage
