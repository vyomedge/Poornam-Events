import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom';



import About from './About'

import Home from './Home';
import Header from './Header';
import Footer from './Component/Footer';
import Services from './Services';
import { Portfolio } from './Portfolio';
import ConnectUs from './ConnectUs';
import Blogs from './Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{marginTop:"-70px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/blogs" element={<Blogs />} />
                <Route path="/connectUs" element={<ConnectUs />} />
           
          
            {/* <Outlet /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
