import React from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import Catalog from './components/Catalog'
import Cleaning from './components/Cleaning'
import Footer from './components/Footer'
import Header from './components/Header'
import Ingredients from './components/Ingredients'
import Navbar from './components/Navbar'
import Office from './components/Office'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <About />
      <Ingredients />
      <Cleaning />
      <Services />
      <Catalog />
    <Office/>

      <Footer />
    </>
  )
}

export default App