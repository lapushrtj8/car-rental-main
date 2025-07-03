import { useState } from 'react';
import './App.css';
import BookingForm from './components/bookingForm';
import CarCard from './components/carcard';
import Confirmation from './components/confirmation';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  // State management
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [formStep, setFormStep] = useState(1);
  //const [searchLocation, setSearchLocation] = useState('');

  // Sample car data
  const cars = [
    {
      id: 1,
      name: 'Hundai Creta',
      type: 'Deisal',
      price: '2000/day',
      seats: 5,
      transmission: 'Automatic',
      image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80',
      imageAlt: 'creta image'
    },
    {
      id: 2,
      name: 'Toyota Fortuner',
      type: 'SUV',
      price: '2999/day',
      seats: 5,
      transmission: 'Automatic',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg/1200px-2015_Toyota_Fortuner_%28New_Zealand%29.jpg',
      imageAlt: 'fortuner'
    },
    {
      id: 3,
      name: 'Honda Civic',
      type: 'Sedan',
      price: '1500/day',
      seats: 5,
      transmission: 'Automatic',
      image: 'https://www.motaauto.com/wp-content/uploads/2024/09/2019-Honda-Civic-Type-R-MUGEN-1.jpg',
      imageAlt: 'Blue Honda Civic sedan on city street'
    },
    {
      id: 4,
      name: 'Maruti Swift',
      type: 'Daily Driver',
      price: '1000/day',
      seats: 4,
      transmission: 'Manual',
      image: 'https://imgd-ct.aeplcdn.com/664x415/n/itk98db_1738093.jpg?q=80',
      imageAlt: 'Red Ford Mustang sports car on highway'
    }
  ];

  // Handlers
  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setFormStep(2);
  };

  const handleBooking = () => {
    if (pickupDate && returnDate) {
      setFormStep(3);
    } else {
      alert('Please select both pickup and return dates');
    }
  };

  const resetForm = () => {
    setSelectedCar(null);
    setPickupDate('');
    setReturnDate('');
    setFormStep(1);
  };

  const calculateTotalPrice = () => {
    if (!pickupDate || !returnDate) return 0;
    const days = Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24));
    return days * parseInt(selectedCar.price.replace(/\D/g, ''));
  };

  return (
    <BrowserRouter>
    <div className="car-rental-app">
      {/* Header Section */}
      <header className="app-header">
       <Navbar />
        <h1>Premium Car Rentals</h1>
        <p>Find the perfect car for your next adventure</p>
        <Routes>
          <Route path="/Login" element={< Login />}/>
        </Routes>
      </header>

      {/* STEP 1: Car Selection */}
      {formStep === 1 && (
          <div className="car-list">
            {/* Using CarCard component for each car */}
            {cars.map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                onClick={handleCarSelect} 
              />
            ))}
        </div>
      )}

      {/* STEP 2: Booking Form */}
      {formStep === 2 && selectedCar && (
        <BookingForm
          car={selectedCar}
          pickupDate={pickupDate}
          returnDate={returnDate}
          onPickupDateChange={(e) => setPickupDate(e.target.value)}
          onReturnDateChange={(e) => setReturnDate(e.target.value)}
          onBack={() => setFormStep(1)}
          onSubmit={handleBooking}
        />
      )}

      {/* STEP 3: Confirmation */}
      {formStep === 3 && selectedCar && (
        <Confirmation
          car={selectedCar}
          pickupDate={pickupDate}
          returnDate={returnDate}
          totalPrice={calculateTotalPrice()}
          onNewBooking={resetForm}
        />
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
