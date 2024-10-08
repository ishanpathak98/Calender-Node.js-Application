const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const today = new Date();
  res.render('index', { date: today.toDateString() });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
