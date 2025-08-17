function Cars() {
  return (
    <div className="max-w-7xl mx-auto my-8 p-5">
      <h2 className="text-center text-3xl md:text-4xl mb-8 font-semibold text-gray-800">
        Available Cars 🚗
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-0 list-none">
        {/* Maruti Swift */}
        <li className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col">
          <img
            alt="Maruti Swift"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <strong className="text-xl text-gray-700 block mb-2">Maruti Swift</strong>
            <span className="text-gray-600 block text-lg">₹1200/day</span>
            <span className="text-gray-600 block text-md">Petrol | Seats: 5</span>
          </div>
          <button className="m-4 py-3 px-5 border-none bg-sky-700 text-white rounded-lg cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-sky-800">
            Book Now
          </button>
        </li>

        {/* Hyundai Creta */}
        <li className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col">
          <img
            alt="Hyundai Creta"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <strong className="text-xl text-gray-700 block mb-2">Hyundai Creta</strong>
            <span className="text-gray-600 block text-lg">₹2200/day</span>
            <span className="text-gray-600 block text-md">Diesel | Seats: 5</span>
          </div>
          <button className="m-4 py-3 px-5 border-none bg-sky-700 text-white rounded-lg cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-sky-800">
            Book Now
          </button>
        </li>

        {/* Mahindra Thar */}
        <li className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col">
          <img
            alt="Mahindra Thar"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <strong className="text-xl text-gray-700 block mb-2">Mahindra Thar</strong>
            <span className="text-gray-600 block text-lg">₹3000/day</span>
            <span className="text-gray-600 block text-md">Diesel | Seats: 4</span>
          </div>
          <button className="m-4 py-3 px-5 border-none bg-sky-700 text-white rounded-lg cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-sky-800">
            Book Now
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Cars;
