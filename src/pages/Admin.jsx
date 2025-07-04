import React, { useEffect, useState } from "react";
import "./Admin.css";

function Admin() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    name: "",
    price: "",
    ctype: "",
    seats: "",
    transmission: "",
    image: ""
  });

  //  Fetch all cars from backend
  const fetchCars = async () => {
    try {
      const res = await fetch("http://localhost:8010/api/cars");
      const data = await res.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8010/api/cars").then((res)=>res.json()).then((data)=>{
        console.log("Fetched cars from backend ",data);
        setCars(data);
    }).catch((err)=>console.error("fetch error ",err));
  }, []);

  //  Delete car
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8010/api/cars/${id}`, {
        method: "DELETE"
      });
      setCars(cars.filter((car) => car._id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  //  Add new car
  const handleAddCar = async () => {
    try {
      const res = await fetch("http://localhost:8010/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar)
      });
      const data = await res.json();
      setCars([...cars, data]);
      setNewCar({ name: "", price: "", ctype: "", seats: "", transmission: "", image: "" });
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-header">
        <input
          type="text"
          placeholder="Car Name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price (e.g. 2000/day)"
          value={newCar.price}
          onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={newCar.ctype}
          onChange={(e) => setNewCar({ ...newCar, ctype: e.target.value })}
        />
        <input
          type="number"
          placeholder="Seats"
          value={newCar.seats}
          onChange={(e) => setNewCar({ ...newCar, seats: e.target.value })}
        />
        <input
          type="text"
          placeholder="Transmission"
          value={newCar.transmission}
          onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCar.image}
          onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
        />
        <button className="btn-add-car" onClick={handleAddCar}>
          ➕ Add Car
        </button>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <div key={car._id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3>{car.name}</h3>
            <p><strong>Price:</strong> {car.price}</p>
            <p><strong>Type:</strong> {car.ctype}</p>
            <p><strong>Seats:</strong> {car.seats}</p>
            <p><strong>Transmission:</strong> {car.transmission}</p>
            <button className="btn btn-delete" onClick={() => handleDelete(car._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;