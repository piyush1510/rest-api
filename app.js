require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

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
