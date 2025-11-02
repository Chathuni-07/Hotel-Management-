import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🏨 HotelEase</div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
