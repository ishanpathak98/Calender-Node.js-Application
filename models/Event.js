const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
<<<<<<< HEAD
    title: String,
    description: String,
    date: Date
});

module.exports = mongoose.model('Event', eventSchema);
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
=======
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
>>>>>>> 3934658 (changes)

