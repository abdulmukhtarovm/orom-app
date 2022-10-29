import React from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import Catalog from './components/Catalog'
import Cleaning from './components/Cleaning'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Office from './components/Office'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Header />
      <Benefits />
      <About />
      <Ingredients />
      <Cleaning />
      <Services />
      <Catalog />
      <Office />
    </>
  )
}

export default App