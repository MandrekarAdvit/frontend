import "./Vehicles.css";

function Scooters() {
  const scooters = [
    {
      id: 1,
      name: "Honda Activa 6G",
      price: "₹500/day",
      engine: "110cc",
      img: "https://www.bikepics.com/images/hondaactiva6g.jpg" // replace with actual image URL
    },
    {
      id: 2,
      name: "TVS Jupiter",
      price: "₹450/day",
      engine: "110cc",
      img: "https://www.bikepics.com/images/tvsjupiter.jpg"
    },
    {
      id: 3,
      name: "Suzuki Access 125",
      price: "₹550/day",
      engine: "125cc",
      img: "https://www.bikepics.com/images/suzukiaccess125.jpg"
    },
  ];

  const handleBooking = (vehicleName) => {
    alert(`Booking for ${vehicleName} is coming soon! 🛵`);
  };

  return (
    <div className="vehicles-container">
      <h2>Available Scooters 🛵</h2>
      <ul className="vehicle-list">
        {scooters.map((scooter) => (
          <li key={scooter.id} className="vehicle-card">
            <img src={scooter.img} alt={scooter.name} className="vehicle-image" />
            <div className="vehicle-info">
              <strong>{scooter.name}</strong>
              <span>{scooter.price}</span>
              <span>Engine: {scooter.engine}</span>
            </div>
            <button
              className="book-btn"
              onClick={() => handleBooking(scooter.name)}
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

export default Scooters;
