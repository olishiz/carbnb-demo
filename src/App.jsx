import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Includes from './components/Includes'
import HowItWorks from './components/HowItWorks'
import ComparisonTable from './components/ComparisonTable'
import Limousines from './components/Limousines'
import SaveSections from './components/SaveSections'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Includes />
      <HowItWorks />
      <ComparisonTable />
      <Limousines />
      <SaveSections />
    </div>
  )
}

export default App
