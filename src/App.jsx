import { useState } from 'react';
import './App.css';
import BookingForm from './components/bookingForm';
import CarCard from './components/carcard';
import Confirmation from './components/confirmation';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars';
import AddCarForm from './pages/AddCarForm';

function App() {
  return(
  <BrowserRouter>
    <div className="car-rental-app">
      {/* Header Section */}
      <header className="app-header">
       <Navbar />
        <h1>Premium Car Rentals</h1>
        <p>Find the perfect car for your next adventure</p>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cars" element={<Cars />}/>
          <Route path="/Login" element={< Login />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/addcar" element={<AddCarForm />}/>

        </Routes>
      </header>
       </div>
    </BrowserRouter>
  );
} 

export default App;
