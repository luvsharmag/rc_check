import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Ensure you have a Home component

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
