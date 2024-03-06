const express = require('express');
const connectDB = require('./dbConnection/db');
const businessRoutes = require('./routes/business');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors())
// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define user routes
app.use('/businesses', businessRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});