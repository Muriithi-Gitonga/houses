import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleHouse from './pages/SingleHouse'

//import component

import Navbar from './components/Navbar'


function App () {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/house/:id" element={ <SingleHouse /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App