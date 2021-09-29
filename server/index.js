require('dotenv').config();
const express = require('express');
require('../db');
const petRouter = require('../routes/pet');

const app = express();

app.use(express.json());
app.use(petRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
