import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HeroImage from '../components/HeroImage'
import Filter from '../components/Filter'
import AdList from '../components/AdList'
import Layout from '../components/Layout'
import actionTypes from '../actions'
import history from '../history'

const HomePage = () => {
  const { items, loading } = useSelector(state => state.ads)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: actionTypes.UPDATE_FILTER, payload: { page: 1, sort: 'date_asc' } })
    dispatch({ type: actionTypes.LOAD_ADS, payload: { type: 'premium' } })
  }, [dispatch])

  const searchHandler = () => history.push(`/ads${window.location.search}`)

  return (
    <Layout>
      <HeroImage>
        <Filter onSubmit={searchHandler} />
      </HeroImage>
      <AdList items={items} loading={loading} title="Premium Ads" />
    </Layout>
  )
}

export default HomePage
