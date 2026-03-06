import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from './pages/Hero'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Results from './pages/Results'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
