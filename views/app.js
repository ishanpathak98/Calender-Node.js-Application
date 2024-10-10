const express = require('express');
const app = express();

// Set the views directory and the view engine to ejs
app.set('views', './views');  // Ensure views directory path is correct
app.set('view engine', 'ejs'); // Ensure you're using ejs

app.get('/', (req, res) => {
    res.render('index');  // Renders index.ejs from the /views directory
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

