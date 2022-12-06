import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Filter from '@components/Filter'
import AdList from '@components/ads/AdList'
import Pagination from '@components/Pagination'
import Layout from '@components/Layout'

import actionTypes from '@actions'

import { SearchWrapper } from './styles'

const AdsPage = () => {
  const [_, setSearchParams] = useSearchParams()

  const { items, loading } = useSelector(state => state.ads)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_ADS, payload: { type: 'all' } })
    setSearchParams(filter)
  }, [dispatch, setSearchParams, filter])

  return (
    <Layout>
      <SearchWrapper>
        <Filter />
      </SearchWrapper>
      <AdList items={items} loading={loading} highlightPremium />
      <Pagination />
    </Layout>
  )
}

export default AdsPage
