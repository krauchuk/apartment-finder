import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Filter from '../../components/Filter'
import Sorter from '../../components/Sorter'
import AdList from '../../components/AdList'
import Pagination from '../../components/Pagination'
import Layout from '../../components/Layout'
import actionTypes from '../../actions'
import history from '../../history'
import { searchParamsSelector } from '../../store/filter'
import { FilterWrapper, AdsCounter, TopPanel } from './styles'

const AdsPage = () => {
  const { items, loading, count } = useSelector(state => state.ads)
  const filter = useSelector(searchParamsSelector, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch({ type: actionTypes.UPDATE_FILTER, payload: { page: 1, sort: 'date_asc' } })
  }, [])

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
      <TopPanel>
        {!!count && (
          <AdsCounter>
            <strong>{count}</strong> ads found
          </AdsCounter>
        )}
        <Sorter />
      </TopPanel>
      <AdList items={items} loading={loading} highlightPremium />
      <Pagination />
    </Layout>
  )
}

export default AdsPage
