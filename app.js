const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const app = express();
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);
const connectDB = require('./config/db');

// Database Connection
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
mongoose.connect('mongodb://localhost:27017/calendar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB Connection Error:', err));

// Routes
app.use('/api/events', eventRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
