import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CarForm() {
    const [cars, setCars] = useState({    
        manifacturer:"",
        model:"",
        year:"",
        price: null,
        mileage:"",
        color:"",
        description:"",
        image:"",
        hp:"",
        cc:"",
        fuel:""
      });
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
          await axios.post("http://localhost:8800/cars", cars);
          console.log(cars);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(true)
        }
      };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="manifacturer"
            label="Car manifacturer.."
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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
          fullWidth
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          defaultValue="Car description.."
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="year"
            label="Year.."
            fullWidth
            variant="standard"
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="price"
            label="Car price.."
            fullWidth
            variant="standard"
            type="number"
            onChange={handleChange}
          />
       </Grid>
       <Grid item xs={12}>
          <TextField
            name="mileage"
            label="Car mileage.."
            fullWidth
            variant="standard"
            type="number"
            onChange={handleChange}
          />
       </Grid>
       <Grid item xs={12}>
          <TextField
            required
            name="color"
            label="Car color.."
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="hp"
            label="Horse power.."
            fullWidth
            variant="standard"
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="cc"
            label="Engine size.."
            fullWidth
            variant="standard"
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="fuel"
            label="Fuel type.."
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid>
      <Button onClick={handleClick} variant="contained" color="success">
        Success
        </Button>
        </Grid>
    </React.Fragment>
  );
}