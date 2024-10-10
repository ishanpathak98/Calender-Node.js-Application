const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.send(event);
});

module.exports = router;
