import React, { useState } from "react";
import "./Bookings.css";

export default function Bookings() {
  const [bookings] = useState([
    { id: "B001", guest: "Harsha Perera", room: "101", date: "2025-10-31", status: "Confirmed" },
  { id: "B002", guest: "Sahan Alwis", room: "202", date: "2025-11-02", status: "Pending" },
  { id: "B003", guest: "Dasuni Perera", room: "303", date: "2025-11-05", status: "Cancelled" },
  { id: "B004", guest: "Nimal Silva", room: "104", date: "2025-11-06", status: "Confirmed" },
  { id: "B005", guest: "Kamal Jayasuriya", room: "205", date: "2025-11-08", status: "Pending" },
  { id: "B006", guest: "Amila Fernando", room: "306", date: "2025-11-09", status: "Confirmed" },
  { id: "B007", guest: "Tharindu Perera", room: "107", date: "2025-11-10", status: "Cancelled" },
  { id: "B008", guest: "Sanduni Silva", room: "208", date: "2025-11-11", status: "Confirmed" },
  { id: "B009", guest: "Ruwan Jayasinghe", room: "309", date: "2025-11-12", status: "Pending" },
  { id: "B010", guest: "Chathurika Perera", room: "110", date: "2025-11-13", status: "Confirmed" },
  { id: "B011", guest: "Pradeep Kumar", room: "211", date: "2025-11-14", status: "Cancelled" },
  { id: "B012", guest: "Dilani Silva", room: "312", date: "2025-11-15", status: "Confirmed" },
  { id: "B013", guest: "Roshan Fernando", room: "113", date: "2025-11-16", status: "Pending" },
  { id: "B014", guest: "Nadeesha Perera", room: "214", date: "2025-11-17", status: "Confirmed" },
  { id: "B015", guest: "Sachin Alwis", room: "315", date: "2025-11-18", status: "Cancelled" },
  { id: "B016", guest: "Dinusha Silva", room: "116", date: "2025-11-19", status: "Confirmed" },
  { id: "B017", guest: "Prashan Perera", room: "217", date: "2025-11-20", status: "Pending" },
  { id: "B018", guest: "Shashini Fernando", room: "318", date: "2025-11-21", status: "Confirmed" },
  { id: "B019", guest: "Ravindu Jayasuriya", room: "119", date: "2025-11-22", status: "Cancelled" },
  { id: "B020", guest: "Chamari Silva", room: "220", date: "2025-11-23", status: "Confirmed" },
  { id: "B021", guest: "Hiran Perera", room: "321", date: "2025-11-24", status: "Pending" },
  { id: "B022", guest: "Thilini Fernando", room: "122", date: "2025-11-25", status: "Confirmed" },
  { id: "B023", guest: "Asanka Silva", room: "223", date: "2025-11-26", status: "Cancelled" },
  { id: "B024", guest: "Niluka Perera", room: "324", date: "2025-11-27", status: "Confirmed" },
  { id: "B025", guest: "Harini Fernando", room: "125", date: "2025-11-28", status: "Pending" }
  ]);

  return (
    <div className="page-container">
      <h1>📅 Bookings</h1>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Guest</th>
            <th>Room</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.guest}</td>
              <td>{b.room}</td>
              <td>{b.date}</td>
              <td className={`status ${b.status.toLowerCase()}`}>{b.status}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
