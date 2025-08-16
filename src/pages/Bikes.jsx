import "./Vehicles.css";

function Bikes() {
  const bikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      price: "₹1000/day",
      type: "Cruiser",
      img: "https://www.bikepics.com/images/classic350.jpg" // replace with actual image URL
    },
    {
      id: 2,
      name: "KTM Duke 250",
      price: "₹1200/day",
      type: "Sports",
      img: "https://www.bikepics.com/images/ktmduke250.jpg"
    },
    {
      id: 3,
      name: "Honda Shine",
      price: "₹600/day",
      type: "Commuter",
      img: "https://www.bikepics.com/images/hondashine.jpg"
    },
  ];

  const handleBooking = (vehicleName) => {
    alert(`Booking for ${vehicleName} is coming soon! 🏍️`);
  };

  return (
    <div className="vehicles-container">
      <h2>Available Bikes 🏍️</h2>
      <ul className="vehicle-list">
        {bikes.map((bike) => (
          <li key={bike.id} className="vehicle-card">
            <img src={bike.img} alt={bike.name} className="vehicle-image" />
            <div className="vehicle-info">
              <strong>{bike.name}</strong>
              <span>{bike.price}</span>
              <span>{bike.type}</span>
            </div>
            <button
              className="book-btn"
              onClick={() => handleBooking(bike.name)}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
      <p className="note">
        *Note: This is sample data. Live availability will be fetched from backend later.
      </p>
    </div>
  );
}

export default Bikes;
