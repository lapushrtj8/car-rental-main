const CarCard = ({ car, onClick }) => {
  return (
    <div className="car-card" onClick={() => onClick(car)}>
      <div className="car-image">
        <img src={car.image} alt={car.imageAlt} />
      </div>
      <div className="car-details">
        <h3>{car.name}</h3>
        <div className="car-specs">
          <span>{car.type}</span>
          <span>{car.seats} seats</span>
          <span>{car.transmission}</span>
        </div>
        <div className="car-price">
          <span>{car.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
