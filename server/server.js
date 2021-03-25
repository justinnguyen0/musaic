const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const bodyParser = require('body-parser');
//const dbConfig = require('./database/db');
const createError = require('http-errors');

dotenv.config()

// Express Route
const userRoute = require('./routes/user.routes')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/users', userRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});