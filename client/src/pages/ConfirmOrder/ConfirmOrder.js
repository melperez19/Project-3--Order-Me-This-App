import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
import Slide from 'react-reveal/Slide';




class ConfirmOrder extends Component {
    render() {
        return (
            <Slide left>
                <div>
                    <Nav />
                    <Container>
                        <h1> Confirm Order </h1>
                    </Container>
                </div>
            </Slide>
        )
    }
}

export default ConfirmOrder;