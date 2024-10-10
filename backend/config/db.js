const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/calendar', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
