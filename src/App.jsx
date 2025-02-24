import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    // <div className="flex items-center justify-center w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    // </div>
  );
}
