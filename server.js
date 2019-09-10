const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config=require('config');


const app = express();

//bodyparser middleware
app.use(express.json());


//body parser
const db = config.get('mongoURI');

// use routes
app.use('/api/items', require('./routes/api/items'));  
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));  

//serve static asstes in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  }
  )
}

//connect to mongo
mongoose
  .connect(db, {
  useNewUrlParser: true ,
  useCreateIndex: true
})
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT ||5000;
app.listen(port, () => console.log(`server started on port ${port}`));