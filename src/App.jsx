import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/project'
import Skill from './components/skill'
import About from './components/About'
import Connect from './components/connect'
import Footer from './components/Footer'

function App() {
  return (
  <>
  <Navbar />
  <Home />
  <Project /><br />
  <Skill />
  <About />
  <Connect />
  <Footer />
  
  </>
)
}

export default App
