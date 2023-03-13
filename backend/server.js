const express = require('express');
const colors = require('colors');
const errorHandler = require('./middleware/errorMiddleware');
const dotnev = require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(201).json({ message: 'Welcome to the Support Desk API' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
