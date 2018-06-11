import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {Drawer, Navigation,Layout} from 'react-mdl'
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div style = {{backgroundColor: "#f7f7f7"}}>
        
        <Layout>  
            <Drawer title="Title">
              <Navigation>
                  <a href="/resume">Resume</a>
                  <a href="/projects">Projects</a>
                  <a href="/media">Media</a>
                  {/* <a href="#">Link</a> */}
              </Navigation>
          </Drawer>
        </Layout>
        <Navbar className = "navbar" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className = "nav-brand-text">
              <a href="/" id = "navbar-text" style = {{color:'white'}}>Eddy Varela</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about">
                About
              </NavItem>
              <NavItem eventKey={2} href="/projects">
                Projects
              </NavItem>
              
            </Nav>
            <Nav pullRight>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1} href="/resume">
                Resume
              </NavItem>
              <NavItem eventKey={2} href="/contact">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>  
        <Main/>  
      </div>
  
    );
  }
}

export default App;
