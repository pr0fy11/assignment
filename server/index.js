
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//establish connection with db

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cars",
});


app.get("/", (req, res) => {
  res.json("hello test");
});

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
  console.log("Connected to backend.");
});