const express = require('express');
const bodyParser=require("body-parser");
const path = require("path");
const app = express();
require('dotenv').config();
const homeRoute = require('./routes/index')

const {pool} = require('./config')

const PORT =process.env.PORT;

//connect .hbs file
app.set('view engine', 'hbs');

//use

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './public')));



const getStudents = (request, response) => {
    pool.query('SELECT * FROM students', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //routes
app.use('/', homeRoute);
app.route('/students').get(getStudents);

//************ */
app.listen(PORT,(req, res) =>{
    console.log(`Server starting in the ${PORT}`)
})