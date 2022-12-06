import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Ads from './pages/Ads'
import Ad from './pages/Ad'
import Contact from './pages/ContactUs'

import store from './store'

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }
`

ReactDom.render(
  <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/ad/:id" element={<Ad />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
