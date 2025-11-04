🏨 Hotel Management System

A Hotel Management System built using React (Vite) and CSS.
This project helps hotel staff manage rooms, bookings, and dashboard analytics efficiently with a clean and responsive interface.

         📋 Features

           ✅ Dashboard

                  Displays hotel statistics and analytics

                   Shows booking trends and room availability summary

          ✅ Room Management

              Add, edit, delete, and view room details

              Each room has type, price, and status (Available / Booked / Maintenance)

        ✅ Booking Management

            View and manage all bookings

            Booking details include guest name, room, date, and booking status

            Supports statuses: Confirmed / Pending / Cancelled

       ✅ Top Navigation Bar

           Easy navigation between Dashboard, Rooms, and Bookings pages

       ✅ Responsive Design

          Works smoothly on both desktop and mobile devices

       ✅ Background Image

           A stylish hotel-themed background added to all pages

| Category                 | Technologies            |
| ------------------------ | ----------------------- |
| **Frontend Framework**   | React (Vite)            |
| **Styling**              | CSS                     |
| **Icons & UI**           | Lucide React (optional) |
| **Animation (optional)** | Framer Motion           |
| **Charts (optional)**    | Recharts                |


hotel-management-system/
│
├── public/
├── src/
│   ├── assets/               # Background image and other static assets
│   ├── components/           # Navbar and reusable UI components
│   ├── pages/
│   │   ├── Dashboard.jsx     # Dashboard page
│   │   ├── Bookings.jsx      # Booking management page
│   │   ├── Rooms.jsx         # Room management page
│   ├── data/
│   │   ├── roomsData.js      # room data 
│   │   ├── bookingsData.js   # booking data 
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # React entry file
│   └── index.css             # Global styles (background, layout)
│
└── package.json


