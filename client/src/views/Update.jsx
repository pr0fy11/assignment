import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Box } from "@mui/system";
import Navbar from "../components/navbar"
import { TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//axios library to establish connection between client>server. Uses http 


//function to collect data for the cars
//setCars updates cars . useState hook

const Add = () => {
  const { id } = useParams();
  const [cars, setCars] = useState({
    manufacturer: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    description: "",
    image: "",
    hp: "",
    cc: "",
    fuel: ""
  });


  const [carSnap, setCarSNap] = useState([]);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/cars/${id}`);
        setCarSNap(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);

  const [error, setError] = useState(false)

  //useNavigate is a hook provided by the React Router library that allows you to programmatically navigate to different routes in your application.

  const navigate = useNavigate();

  //handles a change from the input form . e is used as an event and collects name and value

  const handleChange = (e) => {

    setCars((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };

  //function for the submit button

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8800/cars/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body:cars,

        });
      console.log("Updated values", cars)
      console.log(res)
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div>

      <Navbar></Navbar>
      <Box variant="outlined" sx={{ pl: 45, pr: 45, pt: 5, pb: 5 }}>



        {
          carSnap.map((car) => (


            < div className="form" key={car.id}>

              <Typography>Update existing car</Typography>
              <Grid container spacing={3} key={car.id}>
                <Grid item xs={12} sm={6}>
                  <TextField

                    defaultValue={car.manufacturer == null ? "" : car.manufacturer}
                    name="manufacturer"
                    label="Car model.."
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    defaultValue={car.model == null ? "" : car.model}
                    name="model"
                    label="Car model.."
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.description == null ? "" : car.description}
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows={4}

                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.year == null ? "" : car.year}
                    name="year"
                    label="Year.."
                    fullWidth
                    variant="standard"

                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.price == null ? "" : car.price}
                    name="price"
                    label="Car price.."
                    fullWidth
                    variant="standard"

                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.mileage == null ? "" : car.mileage}
                    name="mileage"
                    label="Car mileage.."
                    fullWidth
                    variant="standard"

                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.color == null ? "" : car.color}
                    name="color"
                    label="Car color.."
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.hp == null ? "" : car.hp}
                    name="hp"
                    label="Horse power.."
                    fullWidth
                    variant="standard"

                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    defaultValue={car.cc == null ? "" : car.cc}
                    name="cc"
                    label="Engine size.."
                    fullWidth
                    variant="standard"

                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField

                    name="fuel"
                    label="Fuel type.."
                    defaultValue={car.fuel == null ? "" : car.fuel}
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button onClick={handleClick} fullWidth variant="contained" sx={{ marginTop: 5 }}>Add listing</Button>
              {error && "Something went wrong!"}
              <Link to="/">See all cars</Link>
            </div >

          ))}
      </Box>
    </div >
  );
};

export default Add;