import React, { Component } from 'react';
import Loginlist from '../components/loginform'
import Navbar from "../components/navbar"

class Cars extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                
                <Loginlist></Loginlist>
            </div>
        );
    }
}

export default Cars;