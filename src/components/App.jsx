import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
