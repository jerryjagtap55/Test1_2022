import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import {Navbar, Footer} from './components/index';
import {Home, Discover, About, Dashboard, Sell, Product_page, Login, Signup } from './pages/index';


function App() {
  return (
    <>
      <div className='App container'>
        <div>
          <Navbar />
        </div>
        <div>
          <h1>
            Succussful test
          </h1>
        </div>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/about" element={<About />} />
        <Route path='/user' element = {<Dashboard/>} />
        <Route path='/sell' element = {<Sell/>} />        
        <Route path="/product" element={<Product_page/>} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
