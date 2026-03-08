import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero'
import { lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'

const AboutUs = lazy(() => import('./pages/AboutUs'))
const Courses = lazy(() => import('./pages/Courses'))
const Results = lazy(() => import('./pages/Results'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <ScrollToTop />

      <main id='main-content'>
        <Suspense fallback={<div className='flex justify-center items-center h-screen'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Hero />}/>
            <Route path='/hero' element={<Hero />}/>
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/results' element={<Results />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/contact' element={<Contact />}/>
            
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
