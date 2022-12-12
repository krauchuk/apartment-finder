import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Filter from '../../components/Filter'
import AdList from '../../components/ads/AdList'
import Pagination from '../../components/Pagination'
import Layout from '../../components/Layout'
import actionTypes from '../../actions'
import history from '../../history'
import { SearchWrapper } from './styles'

const AdsPage = () => {
  const { items, loading } = useSelector(state => state.ads)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_ADS, payload: { type: 'all' } })
    const search = new URLSearchParams(filter).toString()
    history.push({ search })
  }, [dispatch, filter])

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
