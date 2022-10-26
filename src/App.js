import React from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import Cleaning from './components/Cleaning'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Benefits/>
      <About/>
      <Ingredients/>
      <Cleaning/>
      <Services/>
    </>
  )
}

export default App