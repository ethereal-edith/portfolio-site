import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Playground from './components/Playground.jsx'
import Blog from './components/Blog.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </>
  )
}

export default App
