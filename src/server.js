const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//routes
const Routes = require('./routes');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect(
    `mongodb+srv://s2200449:U5Ixhb0I6ooo3lZB@chatbot-backend.jt82y7r.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Successfully connect to MongoDB.');
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

app.use('/', Routes);
app.use('/images', express.static(path.join('src/images')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
