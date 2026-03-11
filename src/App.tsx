import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero'
import { lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'
import WhatsappChat from './components/WhatsappChat'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/Terms&Conditions'

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Courses = lazy(() => import('./pages/Courses'))
const Results = lazy(() => import('./pages/Results'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main id='main-content'>
        <Suspense fallback={<div className='flex justify-center items-center w-screen h-screen'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Hero />}/>
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/results' element={<Results />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
            
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </Suspense>
      </main>

      <WhatsappChat />
      <Footer />
    </>
  )
}

export default App