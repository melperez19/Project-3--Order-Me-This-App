import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
import Slide from 'react-reveal/Slide';




class MyEvents extends Component {
    render() {
        return (
            <Slide left>
                <div>
                    <Nav />
                    <Container>
                        <h1> My Events - All events made by Host </h1>
                        <small>Click on an event name to see the full details</small>
                        <ul>
                            <li><h3>Event Name</h3></li>
                            <li><h3>Event Name</h3></li>
                            <li><h3>Event Name</h3></li>
                            <li><h3>Event Name</h3></li>
                        
                        </ul>
                    </Container>
                </div>
            </Slide>
        )
    }
}

export default MyEvents;