require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
