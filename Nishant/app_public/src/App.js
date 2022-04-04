import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CTA, Navbar, Card } from './components/index';
import { Features, Footer } from './containers/index';
import {About, Discover, Home, Login, Product_page, Signup, Dashboard, Sell, Checkout } from './pages/index';
import './App.css';


const App = () => {
  return (
    
    <><div className='App container'>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover/:adID" element={<Product_page/>} />
        <Route path='/user' element = {<Dashboard/>} />
        <Route path='/postad' element = {<Sell/>} />
        <Route path='/checkout' element = {<Checkout/>} />
        
      </Routes>
      <div>
      <Footer />
      </div>
    </div></>
  )
}

export default App
