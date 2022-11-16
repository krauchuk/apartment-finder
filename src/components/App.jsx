import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'

import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/ContactUs'

function App() {
  return (
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
  )
}

export default App
