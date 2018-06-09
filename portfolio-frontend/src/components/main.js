import React from 'react';
import LandingPage from './landingpage';
import About from './about';
import Blog from './blog';
import Projects from './projects';
import Contact from './contact';
import Media from './media';
import Resume from './resume';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/blog" component = {Blog}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/projects" component = {Projects}/>
        <Route exact path = "/media" component = {Media}/>
        <Route exact path = "/resume" component = {Resume}/>
    </Switch>
)

export default Main;