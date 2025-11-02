import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelDashboard from "./pages/HotelDashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<HotelDashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="*" element={<HotelDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
