import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {About, Articles, Home, IPassets, SignUp, UserProfile} from "../src/pages/public-user"
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/publications" element={<Articles />}/>
          <Route path="/ip-assets" element={<IPassets />}/>
          <Route path="/profile" element={<UserProfile />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
