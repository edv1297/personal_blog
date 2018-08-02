import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs = '4'>
                    <b>Fundamentals</b> <br/>
                    My name is Eddy and I firmly believe that software will 
                    allow us to enjoy an easier and more enjoyable life. I am insanely 
                    motivated and passionate about helping other people. I want to empower and help 
                    build dreams from the ground up. If you have some idea that you want to build, <a href = "/contact">chat</a> with me.<br/>
                    <br/>
                    </Col>
                    <Col style = {{textAlign:'center'}}xs = '8'>
                     <img id ="about-image-container" src = "https://picsum.photos/300/200" alt = ""/>
                    </Col>
                </Row>
                    <b>Background</b><br/>

                    I was born in Cuba and emigrated to the US when I was 2.5 years old. I have been raised in Miami, Florida ever since.
                    I have been a hustler ever since I can remember. From the ripe age of 8, I resold candy bars door-to-door in order to 
                    fund my skateboard dreams. Throughout middle and highschool I worked in my dad's photography business and ran the video
                    production aspect. Work was not an unfamiliarity, it was more of a commonplace that I found comfort in.
                    At one point after I had gotten into college, I was working three part time jobs after-school and on the week-ends. 
                    <br/>

                    <br/><b>College and Education</b><br/>
                    I attended Williams College for 2 years and absolutely hated the environment I was in and felt like I was wasting time. 
                    The education at Williams was unparalleled and helped me grow but I had to do work on things that mattered so I moved back home
                    to Miami, Florida where I now attend Florida Internationl University pursuing Computer Science and Math.<br/>

                    <br/><b>Projects and Passions</b><br/>
                    I am working on building out Captain Code, a Software Research and Development firm in South Florida where students can come together to learn and 
                    collaborate on projects that they would not normally have the resources for.
                    <br/><br/> If I had someone that would have empowered me to learn
                    how to code I would have been significantly happier to find my passion early on. This company will also provide software solutions to
                    other corporations and business as the main source of revenue but that is not the sole purpose.
                    <br/>

               
                    <div className = "image-container">
                    
                    <img id ="about-image-container" src = "https://picsum.photos/300/200" alt = ""/>
                    <img id ="about-image-container" src = "https://picsum.photos/300/200" alt = ""/>

                    </div>
           
            </Container>
        );
    }
}

export default About;