import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//axios library to establish connection between client>server. Uses http 


//function to collect data for the cars
//setCars updates cars . useState hook

const Add = () => {
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
    <div className="form">

      <h1>Add a new car</h1>
      <input
        type="text"
        placeholder="Car manifacturer.."
        name="manifacturer"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Car description.."
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Car model.."
        name="model"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Car year.."
        name="year"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price..$"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Car color.."
        name="color"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Car mileage.."
        name="mileage"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Horse power.."
        name="hp"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Engine size.."
        name="cc"
        onChange={handleChange}
      />
      <select name="fuel">
        <option value="">Select Fuel Type</option>
        <option value="1">Diesel</option>
        <option value="2">Gasoline</option>
        <option value="3">Electric</option>
        <option value="4">Hybrid</option>
      </select>
      <button onClick={handleClick}>Add listing</button>
      {error && "Something went wrong!"}
      <Link to="/">See all cars</Link>
    </div>
  );
};

export default Add;