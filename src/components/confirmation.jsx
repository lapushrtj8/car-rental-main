const Confirmation = ({ car, pickupDate, returnDate, totalPrice, onNewBooking }) => {
  return (
    <div className="confirmation-section">
      <h2>Booking Confirmed!</h2>
      <div className="confirmation-card">
        <img src={car.image} alt={car.imageAlt} />
        <div className="confirmation-details">
          <h3>{car.name}</h3>
          <div className="booking-info">
            <p>
              <strong>Pickup Date:</strong> {pickupDate}
            </p>
            <p>
              <strong>Return Date:</strong> {returnDate}
            </p>
            <p>
              <strong>Total Price:</strong> ${totalPrice}
            </p>
          </div>
          <button className="button button-primary" onClick={onNewBooking}>
            Make Another Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
