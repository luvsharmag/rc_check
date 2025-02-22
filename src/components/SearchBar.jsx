import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [carNumber, setCarNumber] = useState("");

  const handleSearch = () => {
    if (carNumber.trim()) {
      onSearch(carNumber);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter Car Number"
        value={carNumber}
        onChange={(e) => setCarNumber(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-80 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
