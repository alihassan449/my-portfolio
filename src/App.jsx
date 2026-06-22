import './App.css'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import CursorFollower  from './components/CursorFollower'

function App() {
  return (
    <div>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App