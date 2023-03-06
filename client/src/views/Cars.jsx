import React, { Component } from 'react';
import Carlist from '../components/carlist'

class Cars extends Component {
    render() {
        return (
            <div style={{background:"blue"}}>
                <h1>Cars</h1>
                <Carlist>

                </Carlist>
            </div>
        );
    }
}

export default Cars;