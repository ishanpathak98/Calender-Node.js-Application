const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');
app.use('/api', eventRoutes);
const app = express();
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/calendar', { useNewUrlParser: true });

app.get('/', (req, res) => res.send('Calendar App'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

