const BookingForm = ({ 
  car, 
  pickupDate, 
  returnDate, 
  onPickupDateChange, 
  onReturnDateChange, 
  onBack, 
  onSubmit 
}) => {
  return (
    <div className="booking-section">
      <h2>Book your {car.name}</h2>
      <div className="booking-details">
        <div className="car-preview">
          <img src={car.image} alt={car.imageAlt} />
          <div className="car-info">
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
        <div className="booking-form">
          <div className="form-group">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              type="date"
              id="pickup-date"
              value={pickupDate}
              onChange={onPickupDateChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              id="return-date"
              value={returnDate}
              onChange={onReturnDateChange}
              min={pickupDate || new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-actions">
            <button className="button button-secondary" onClick={onBack}>
              Back
            </button>
            <button className="button button-primary" onClick={onSubmit}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
