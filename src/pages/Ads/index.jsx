import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Filter from '@components/Filter'
import AdList from '@components/ads/AdList'
import Pagination from '@components/Pagination'

import actionTypes from '@actions'

import { SearchWrapper } from './styles'

const AdsPage = () => {
  const [_, setSearchParams] = useSearchParams()

  const { items, loading } = useSelector(state => state.ads.regular)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_REGULAR_REQUEST })
    setSearchParams(filter)
  }, [dispatch, setSearchParams, filter])

  return (
    <>
      <SearchWrapper>
        <Filter />
      </SearchWrapper>
      <AdList items={items} loading={loading} />
      <Pagination />
    </>
  )
}

export default AdsPage
