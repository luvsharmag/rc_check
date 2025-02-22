import { useState } from "react";
import SearchBar from "../components/SearchBar";
import VehicleDetails from "../components/VehicleDetails";
import Loader from "../components/Loader";
import { fetchVehicleData } from "../api";
import { motion } from "framer-motion";

const Home = () => {
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (carNumber) => {
    setLoading(true);
    setError("");
    setVehicle(null);

    const data = await fetchVehicleData(carNumber);

    if (data) {
      setVehicle(data);
    } else {
      setError("Vehicle details not found!");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl font-bold text-center text-blue-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Car Details Finder 🚗
        </motion.h1>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loader */}
        {loading && <Loader />}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {/* Vehicle Details */}
        {vehicle && <VehicleDetails vehicle={vehicle} />}
      </div>
    </div>
  );
};

export default Home;
