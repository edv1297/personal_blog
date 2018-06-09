import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import PortfolioPic from '../assets/img/portfolio.JPG';
import {Button} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (

            <div className = "content">
            <Jumbotron id= "jumbo-bg">
            <div className = "content-container">
                <img className = "landing-image" src = {PortfolioPic}/>
                <h1 id = "landing-header">Hi, my name is Eddy.</h1>
                <p id = "landing-header-content">
                    I am studying Computer Science and Math at Florida International University.<br/>
                    My interests include Distributed Computer Systems, IoT, VR/AR, and Artificial Intelligence. 
                </p>
                    <a href = "/about">    
                        <Button style = {{color:'white', backgroundColor:"navy-blue"}} primary>Learn more</Button>
                    </a>
            </div>  
            </Jumbotron>
            </div>
        );
    }
}

export default LandingPage;