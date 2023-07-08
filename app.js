const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const v1 = require('./router/index')
require('dotenv').config({ path: path.join(__dirname, './config/.env') });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Initial Route Working...' });
});

app.use('/v1',v1)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server listening on port:', process.env.PORT);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
