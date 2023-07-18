import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Navbar from './components/shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Events from './components/Events/Events';
import Trustees from './components/Trustees/Trustees';
import Event from './components/Events/Event';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/contact/Contact';
// import { useState, useEffect } from 'react'

// import { Route, Routes } from "react-router-dom";

function App() {



  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />}></Route>
        <Route path='/events/:id' element={<Event />}></Route>
        <Route path='/trustees' element={<Trustees/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
