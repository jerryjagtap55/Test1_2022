import logo from './logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { CTA, Navbar, Card } from './components/index';
import { Features, Footer } from './containers/index';
import {About, Discover, Home, Login, Product_page, Signup } from './pages/index';
import './App.css';


const App = () => {
  return (
    
    <><div className='App container'>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <div>
      <Footer />
      </div>
    </div></>
  )
}

export default App
