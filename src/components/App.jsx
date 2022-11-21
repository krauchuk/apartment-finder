import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createGlobalStyle } from 'styled-components'

import Header from './common/Header'
import Footer from './common/Footer'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Ads from './pages/Ads'

import Contact from './pages/ContactUs'

import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }
`

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ads" element={<Ads />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
