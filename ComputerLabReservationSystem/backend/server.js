const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form submissions

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});