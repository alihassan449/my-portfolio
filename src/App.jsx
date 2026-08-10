import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import CursorFollower  from './components/CursorFollower'
import ProjectDetail   from './components/ProjectDetail'
import Timeline        from './components/Timeline'
import BackToTop       from './components/BackToTop'

function Home() {
  return (
    <div>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App