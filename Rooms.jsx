import React, { useState } from "react";
import "./Rooms.css";

export default function Rooms() {
  const [rooms, setRooms] = useState([
    { id: "R101", type: "Deluxe", price: 12000, status: "Available" },
  { id: "R102", type: "Suite", price: 20000, status: "Booked" },
  { id: "R103", type: "Standard", price: 9000, status: "Maintenance" },
  { id: "R104", type: "Deluxe", price: 13000, status: "Available" },
  { id: "R105", type: "Suite", price: 21000, status: "Booked" },
  { id: "R106", type: "Standard", price: 9500, status: "Available" },
  { id: "R107", type: "Deluxe", price: 12500, status: "Maintenance" },
  { id: "R108", type: "Suite", price: 22000, status: "Available" },
  { id: "R109", type: "Standard", price: 9800, status: "Booked" },
  { id: "R110", type: "Deluxe", price: 13500, status: "Available" },
  { id: "R111", type: "Suite", price: 23000, status: "Maintenance" },
  { id: "R112", type: "Standard", price: 10000, status: "Available" },
  { id: "R113", type: "Deluxe", price: 14000, status: "Booked" },
  { id: "R114", type: "Suite", price: 24000, status: "Available" },
  { id: "R115", type: "Standard", price: 10200, status: "Maintenance" },
  { id: "R116", type: "Deluxe", price: 14500, status: "Available" },
  { id: "R117", type: "Suite", price: 25000, status: "Booked" },
  { id: "R118", type: "Standard", price: 10500, status: "Available" },
  { id: "R119", type: "Deluxe", price: 15000, status: "Maintenance" },
  { id: "R120", type: "Suite", price: 26000, status: "Available" },
  { id: "R121", type: "Standard", price: 10800, status: "Booked" },
  { id: "R122", type: "Deluxe", price: 15500, status: "Available" },
  { id: "R123", type: "Suite", price: 27000, status: "Maintenance" },
  { id: "R124", type: "Standard", price: 11000, status: "Available" },
  { id: "R125", type: "Deluxe", price: 16000, status: "Booked" },
  ]);

  const [newRoom, setNewRoom] = useState({ id: "", type: "", price: "", status: "Available" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrEdit = () => {
    if (!newRoom.id || !newRoom.type || !newRoom.price) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...rooms];
      updated[editIndex] = newRoom;
      setRooms(updated);
      setEditIndex(null);
    } else {
      setRooms([...rooms, newRoom]);
    }

    setNewRoom({ id: "", type: "", price: "", status: "Available" });
  };

  const handleEdit = (index) => setNewRoom(rooms[index]) || setEditIndex(index);
  const handleDelete = (index) => {
    if (window.confirm("Are you sure?")) setRooms(rooms.filter((_, i) => i !== index));
  };

  return (
    <div className="page-container">
      <h1>🏠 Manage Rooms</h1>

      <div className="form-card">
        <h3>{editIndex !== null ? "✏️ Edit Room" : "➕ Add New Room"}</h3>
        <div className="form-grid">
          <input type="text" name="id" placeholder="Room ID" value={newRoom.id} onChange={handleChange} />
          <input type="text" name="type" placeholder="Room Type" value={newRoom.type} onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" value={newRoom.price} onChange={handleChange} />
          <select name="status" value={newRoom.status} onChange={handleChange}>
            <option>Available</option>
            <option>Booked</option>
            <option>Maintenance</option>
          </select>
        </div>
        <button onClick={handleAddOrEdit}>{editIndex !== null ? "Update Room" : "Add Room"}</button>
      </div>

      <table className="rooms-table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, i) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>Rs.{room.price}</td>
              <td className={`status Rs.{room.status.toLowerCase()}`}>{room.status}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(i)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
