import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CompareProvider } from './context/CompareContext'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import CompareBar from './components/CompareBar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Booking from './pages/Booking'
import Compare from './pages/Compare'

function App() {
  return (
    <Router basename="/carbnb-demo">
      <CompareProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
          <Footer />
          <BottomNav />
          <CompareBar />
        </div>
      </CompareProvider>
    </Router>
  )
}

export default App
