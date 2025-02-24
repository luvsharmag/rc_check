import { useState } from "react";
import SearchBar from "../components/SearchBar";
import VehicleDetails from "../components/VehicleDetails";
import Loader from "../components/Loader";
import { fetchVehicleData } from "../api";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
import Mainsecond from "../components/main2/Mainsecond";

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
    <>
      <Navbar />


      <div style={{backgroundImage:"url(https://loconav.com/static/99b03d04069fec2e4f8b1e0dd536d64b/1a834/amazon-banner-mobile.webp)"}} className="flex items-center justify-center min-h-screen w-full">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
          <motion.h1
            className="text-2xl font-bold text-center text-black mb-6 md:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get RC Information 🚗
          </motion.h1>

          <SearchBar onSearch={handleSearch} />

          {loading && <Loader />}

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {vehicle && <VehicleDetails vehicle={vehicle} />}
        </div>
      </div>
      <Mainsecond/>
      <Footer />
    </>
  );
};

export default Home;
