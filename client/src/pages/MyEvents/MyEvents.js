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
                    </Container>
                </div>
            </Slide>
        )
    }
}

export default MyEvents;