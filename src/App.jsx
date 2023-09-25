import React from 'react'
import "./App.css";
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Footer from "./components/footer/Footer";
import Contacts from './pages/contact/Contacts';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/contact' element={<Contacts />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App