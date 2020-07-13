import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './landing.css'

export class landing extends Component {
    render() {
        return (
            <div className ="home">
                <div className = "top-container">
                    <h1>Petful</h1>
                        <h2>Adopt the pet for you!</h2>
                </div>

                <div className ="process-content">
                    <h3>Welcome to Petful</h3>
                    <h4>The queue based adoption service</h4>

                    <h5>Here's how it works:</h5>
                    <p>Since we run on a first in first out system, you will be matched with the pet that is 
                        assigned to you in the queue.</p>
                    <p>Once you recieve your match you click on the adopt button and fill out your name and
                        you will have information sent to you about how to continue the adoption process!
                    </p>
                </div>
                
                <div className ="enter">
                    <Link to ="/adopt">Adopt now!</Link>
                </div>
            </div>
        )
    }
}

export default landing
