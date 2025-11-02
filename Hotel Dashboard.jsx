import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./HotelDashboard.css";

export default function HotelDashboard() {
  const data = [
    { month: "Jan", bookings: 40 },
    { month: "Feb", bookings: 60 },
    { month: "Mar", bookings: 45 },
    { month: "Apr", bookings: 70 },
    { month: "May", bookings: 90 },
    { month: "Jun", bookings: 100 },
  ];

  return (
    <div className="page-container">
      <h1 className="dashboard-title">🏨 Hotel Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Rooms</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Active Bookings</h3>
          <p>75</p>
        </div>
        <div className="stat-card">
          <h3>Monthly Revenue</h3>
          <p>RS.12,150,200</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Monthly Bookings Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorBookings)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
