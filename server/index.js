
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const app = express();




//establish connection with db dotenv

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});


app.use(cors());
app.use(express.json());


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json("hello test");
});

//Login method

app.post('/login', function (req, res) {
  // capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  
  // ensure the input fields exists and are not empty
  if (username && password) {
    // execute SQL query that'll select the account from the database based on the specified username and password
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      // if there is an issue with the query, output the error
      if (error) throw error;
      // if the account exists
      if (results.length > 0) {
        // authenticate the user
        req.session.loggedin = true;
        req.session.username = username;


      } else {
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

function isLoggedIn(req, res, next) {
  if (req.session.loggedin) {
    // If the user is logged in, call the next middleware
    return next();
  }
  // If the user is not logged in, redirect to login page or return error response
  res.redirect('http://localhost:3000/login');
}

//show all cars


app.get("/cars", (req, res) => {
  const q = "SELECT * FROM cars";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//show 1 car with specific ID
//:id not static path... changeble

app.get("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const q = "SELECT * FROM cars WHERE id = ?";

  db.query(q, [carId], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  })
})

//insert new car

app.post("/cars", (req, res) => {
  const q = "INSERT INTO cars(manifacturer, model, year, price, mileage, color, description, image, hp, cc, fuel) VALUES (?)";

  const values = [
    req.body.manifacturer,
    req.body.model,
    req.body.year,
    req.body.price,
    req.body.mileage,
    req.body.color,
    req.body.description,
    req.body.image,
    req.body.hp,
    req.body.cc,
    req.body.fuel,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//delete a car from the db

app.delete("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const q = " DELETE FROM cars WHERE id = ? ";

  db.query(q, [carId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//change a car with a specific ID

app.put("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const q = "UPDATE cars SET manifacturer= ?, model= ? , year= ? , price= ? , mileage= ?, color= ?, description= ?, image= ?, hp= ?, cc= ?, fuel= ? WHERE id = ?";

  const values = [
    req.body.manifacturer,
    req.body.model,
    req.body.year,
    req.body.price,
    req.body.mileage,
    req.body.color,
    req.body.description,
    req.body.image,
    req.body.hp,
    req.body.cc,
    req.body.fuel,
  ];

  db.query(q, [...values, carId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



app.listen(8800, () => {
  console.log("Server started.");
});