import React from 'react'
import "./App.css";
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Footer from "./components/footer/Footer";
import Contacts from './pages/contact/Contacts';
import Project from './components/projects/Project';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/contact' element={<Contacts />}/>
        <Route path='/project/:id' element={<Project />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App