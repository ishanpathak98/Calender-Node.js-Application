const Event = require('../models/Event');

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send();
    res.send(event);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).send();
    res.send(event);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).send();
    res.send({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
