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
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <Home />
  <Project />
  <Skill />
  <About />
  <Connect />
  <Footer />
  
  </>
)
}

export default App
