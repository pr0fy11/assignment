import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carimg from '../assets/car.jpg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cars");
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);

  const [error, setError] = useState(false)

  const handleClick = async (e, id) => { // Accept an additional parameter for the id of the record to delete
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8800/cars/${id}`); // Use template literals to include the id in the URL
      window.location.reload();
    } catch (err) {
      setError(true);
    }
  };
    return (
    <div>
        {cars.map((car) => (
             
             
        <Paper
            
            sx={{
                p: 2,
                margin: 'auto',
                marginTop: 2,
                marginBottom: 2,
                maxWidth: 750,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

            }}
        >
    
            <Grid container spacing={2}>

                <Grid item>

                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        
                    <Img src={Carimg} alt="carimg"/>

                    </ButtonBase>
                </Grid>
                
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                            {car.manufacturer} {car.model}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            Year: {car.year}, {car.mileage}km
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {car.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        {car.price}.00$
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{ml:68}}>
                <Stack direction="row" spacing={2}>
                <Link style={{textDecoration:"none"}} to={`/update/${car.id}`}>
                <Button variant="contained" color="success" >
                    Edit
                </Button>
                </Link>
                <Button onClick={(e) => handleClick(e, car.id)} variant="outlined" color="error">
                    Delete
                </Button>
                </Stack>
  
                </Grid>
        </Paper >
        ))}
    </div>
    );
}