import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createGlobalStyle } from 'styled-components'

import Header from './common/Header'
import Footer from './common/Footer'

import Home from './pages/Home'
import FAQ from './pages/FAQ'

import Contact from './pages/ContactUs'

import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, sans-serif;
    }
`

function App() {
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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
