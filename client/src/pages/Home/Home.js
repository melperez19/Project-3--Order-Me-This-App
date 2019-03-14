import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { NavLink } from "react-router-dom";
import Email from "../Email/Email";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <Slide left>
            <div>
                <Nav className="nav">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/eventInfo" activeClassName="active">Event Info</NavLink>
                    <NavLink to="/confirm" activeClassName="active">Confirm Order</NavLink>
                    <NavLink to="/favorites" activeClassName="active">Favorites</NavLink>

                </Nav>

                <Container>

                    <div className="host-id col text-center">
                        <p>Welcome, Username</p>
                        <p>Fill in the blanks to send your invitations.</p>
                    </div>
                    <div className="letterArea p-3">
                        <Email />
                    </div>
                        
                    
                    
                </Container>
            </div>
            </Slide>
        )

    }
}

export default Home;