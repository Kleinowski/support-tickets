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

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
