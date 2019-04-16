import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Email from "../Email/Email";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./Home.css";
import ApplicationContext from "../../ApplicationContext";

class Home extends Component {
    static contextType = ApplicationContext;
    state = {
        user: this.context.user
    }

    render() {
        return (
            
                <div>
                    <Nav className="nav">
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/eventInfo" activeClassName="active">Event Info</NavLink>
                        <NavLink to="/confirm" activeClassName="active">Confirm Order</NavLink>
                        <NavLink to="/favorites" activeClassName="active">Favorites</NavLink>
                    </Nav>
                <Slide left>
                    <div className="container d-flex justify-content-center">
                        <div className="homeBackground d-flex justify-content-center">
                            <div className="homeArea">
                                <div className="homeTitle text-center">
                                    <p>Welcome, {this.state.user.email}</p>
                                    <p>Fill in the blanks to send your invitations.</p>
                                </div>
                                <div className="p-3">
                                    <Email />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                </div>
            
        )
    }
}

export default Home;