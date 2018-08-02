import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import PortfolioPic from '../assets/img/portfolio.JPG';
import {Button} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (

        <div className = "content">
            <Jumbotron id= "jumbo-bg">
            <Container>
                <Row>
                    <Col  style ={{textAlign:'center'}} sm = '12' lg = "12">
                        <img className = "landing-image" src = {PortfolioPic} alt = ""/>
                <h1 id = "landing-header">Hi, my name is Eddy.</h1>
                <p id = "landing-header-content">
                    I am studying Computer Science and Math at Florida International University.<br/>
                    My interests include Distributed Computer Systems, IoT, VR/AR, and Artificial Intelligence. 
                </p>
                    <a href = "/about">    
                        <Button style = {{color:'white', backgroundColor:"navy-blue"}} primary>Learn more</Button>
                    </a>
                    </Col>
                    </Row>
            </Container> 
            </Jumbotron>
            </div>
        );
    }
}

export default LandingPage;