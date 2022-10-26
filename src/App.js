import React from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Benefits/>
      <About/>
    </>
  )
}

export default App