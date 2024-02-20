import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {About, Publications, Home, IPassets, SignUp, UserProfile} from "../src/pages/public-user"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/publications" element={<Publications />}/>
          <Route path="/ip-assets" element={<IPassets />}/>
          <Route path="/profile" element={<UserProfile />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
