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
        placeholder="Car manifacturer"
        name="manifacturer"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Add;