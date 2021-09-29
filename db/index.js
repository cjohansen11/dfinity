const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_DEV;

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    if (e) {
      console.error('Error:', e.message);
    }
  }
);
