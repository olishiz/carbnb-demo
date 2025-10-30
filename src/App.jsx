import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Cars from './pages/Cars'

function App() {
  return (
    <Router basename="/carbnb-demo">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  )
}

export default App
