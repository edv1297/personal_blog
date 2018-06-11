import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className = "content">
                <h1 className = "header-text">About</h1>
                <div className = "webpage-content-container">
                    
                    <p id = "paragraph-container">
                    <b>Fundamentals</b> <br/>
                    My name is Eddy and I firmly believe that software will 
                    allow us to enjoy an easier and more enjoyable life. I am insanely 
                    motivated and passionate about helping other people. I want to empower and help 
                    build dreams from the ground up. If you have some idea that you want to build, <a href = "/contact">chat</a> with me.<br/>
                    <br/>
                    
                    <b>Background</b><br/>

                    I was born in Cuba and emigrated to the US when I was 2.5 years old. I have been raised in Miami, Florida ever since.
                    I have been a hustler ever since I can remember. From the ripe age of 8, I resold candy bars door-to-door in order to 
                    fund my skateboard dreams. Throughout middle and highschool I worked in my dad's photography business and ran the video
                    production aspect. Work was not an unfamiliarity, it was more of a commonplace that I found comfort in.
                    At one point after I had gotten into college, I was working three part time jobs after-school and on the week-ends. 
                    <br/>

                    <br/><b>College and Education</b>

                    </p>
                    <img src = "https://picsum.photos/300/200" alt = ""/>
                </div>
            </div>
        );
    }
}

export default About;