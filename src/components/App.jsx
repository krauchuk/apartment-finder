import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

import actionTypes from '@actions'

import Home from '../pages/Home'
import FAQ from '../pages/FAQ'
import Ads from '../pages/Ads'
import Ad from '../pages/Ad'
import Contact from '../pages/ContactUs'

import store from '../store'

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_CITIES_REQUEST })
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/ad/:id" element={<Ad />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper
