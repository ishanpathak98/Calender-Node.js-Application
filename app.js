// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Define the home route
app.get('/', (req, res) => {
    const today = new Date(); // Get today's date
    res.render('index', { date: today.toDateString() }); // Pass the date to the view
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
