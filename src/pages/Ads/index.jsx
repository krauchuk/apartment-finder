import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Filter from '../../components/Filter'
import AdList from '../../components/AdList'
import Pagination from '../../components/Pagination'
import Layout from '../../components/Layout'
import actionTypes from '../../actions'
import history from '../../history'
import { searchParamsSelector } from '../../store/filter'
import { FilterWrapper } from './styles'

const AdsPage = () => {
  const { items, loading } = useSelector(state => state.ads)
  const filter = useSelector(searchParamsSelector, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_ADS, payload: { type: 'all' } })
    const search = new URLSearchParams(filter).toString()
    history.push({ search })
  }, [dispatch, filter])

  return (
    <Layout>
      <FilterWrapper>
        <Filter />
      </FilterWrapper>
      <AdList items={items} loading={loading} highlightPremium />
      <Pagination />
    </Layout>
  )
}

export default AdsPage
