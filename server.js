const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Read JSON data
app.use(express.json());

// Destination routes
app.use('/api/destinations', require('./routes/destinationRoutes'));

app.get('/', (req, res) => {
    res.send("Welcome to Destiny Travels API");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});