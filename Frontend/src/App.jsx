import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
