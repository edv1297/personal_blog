import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
class Media extends Component {
    render() {
        return (
            <div className = "content">
                <h1 className = "header-text">media</h1>
                <Grid className = "grid-container">
                    <Cell col={4}>
                        <h1>TEST</h1>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Media;