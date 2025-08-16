import "./Vehicles.css";

function Cars() {
  return (
    <div className="vehicles-container">
      <h2>Available Cars 🚗</h2>
      <ul className="vehicle-list">
        <li className="vehicle-card">
          <img
            alt="Maruti Swift"
            className="vehicle-image"
          />
          <div className="vehicle-info">
            <strong>Maruti Swift</strong>
            <span>₹1200/day</span>
            <span>Petrol | Seats: 5</span>
          </div>
          <button className="book-btn">Book Now</button>
        </li>

        <li className="vehicle-card">
          <img
            alt="Hyundai Creta"
            className="vehicle-image"
          />
          <div className="vehicle-info">
            <strong>Hyundai Creta</strong>
            <span>₹2200/day</span>
            <span>Diesel | Seats: 5</span>
          </div>
          <button className="book-btn">Book Now</button>
        </li>

        <li className="vehicle-card">
          <img
            alt="Mahindra Thar"
            className="vehicle-image"
          />
          <div className="vehicle-info">
            <strong>Mahindra Thar</strong>
            <span>₹3000/day</span>
            <span>Diesel | Seats: 4</span>
          </div>
          <button className="book-btn">Book Now</button>
        </li>
      </ul>

      
    </div>
  );
}

export default Cars;
