import React, { Component } from 'react';
import Registerform from '../components/registerform';
import Navbar from "../components/navbar";

class Cars extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                
                <Registerform> </Registerform>
            </div>
        );
    }
}

export default Cars;