const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db/connect');
require('express-async-errors'); //async errors
const path = require('path');

const store = require('./routes/store');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8000;

//api endpoints
app.get('/', (req, res) => {
  res.status(200).send('app is up and running');
});

app.use('/api/v1/store', store);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
