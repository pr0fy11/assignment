import React, { Component } from 'react';
import Carlist from '../components/carlist'
import Navbar from "../components/navbar"

class Cars extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                <h1>Cars</h1>
                <Carlist>

                </Carlist>
            </div>
        );
    }
}

export default Cars;