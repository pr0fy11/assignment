import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Addform from "../components/addform"
import { Box } from "@mui/system";
import Navbar from "../components/navbar"
//axios library to establish connection between client>server. Uses http 


//function to collect data for the cars
//setCars updates cars . useState hook

const Add = () => {
  return (
    <div>
      <Navbar></Navbar>
    <Box variant="outlined" sx={{pl:45, pr:45, pt:5, pb:5 }}>
      <Addform></Addform>
    </Box>
    </div>
  );
};

export default Add;