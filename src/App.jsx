import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CompareProvider } from './context/CompareContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import CompareBar from './components/CompareBar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Booking from './pages/Booking'
import BookingDetail from './pages/BookingDetail'
import Compare from './pages/Compare'
import Account from './pages/Account'

function App() {
  return (
    <Router basename="/carbnb-demo">
      <AuthProvider>
        <CompareProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking/:carId" element={<BookingDetail />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Footer />
            <BottomNav />
            <CompareBar />
          </div>
        </CompareProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
