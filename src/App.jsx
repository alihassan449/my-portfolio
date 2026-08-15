import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
import NotFound        from './components/NotFound'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 }
}

const pageTransition = {
  duration: 0.4,
  ease: 'easeInOut'
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function Home() {
  return (
    <PageWrapper>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </PageWrapper>
  )
}

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={
          <PageWrapper>
            <ProjectDetail />
          </PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default App