require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
process.env.MONGO_URL
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify:true
});
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.error("database connected"));

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.use('/admin',require('./routes/admin'))
app.use('/',require('./routes/public'))

//error
app.use((err, req, res, next) => {
    res.status(500).send('500 - Something was error!');
});
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
