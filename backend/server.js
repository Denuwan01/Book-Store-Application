require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');



const app = express();

// Middleware
app.use(cors());
app.use(express());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/cart', cartRoutes);

// Error Handler Middleware
app.use(errorHandler);

// Connect to Database and Start Server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
  });
