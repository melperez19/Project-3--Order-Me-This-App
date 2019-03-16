import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./MyEvents.css";




class MyEvents extends Component {
    render() {
        return (
            <Slide left>
                <div>
                    <Nav />
                    <div className="container d-flex justify-content-center">
                        <div className="myEventsBackground justify-content-center">
                            <div className="myEventsTitle col text-center">
                            <h1> My Events - All events made by Host </h1>
                            </div>
                            <div className="myEventsArea p-3">
                            <small>Click on an event name to see the full details</small>
                            
                            <ul>
                                <li><h3>Event Name</h3></li>
                                <li><h3>Event Name</h3></li>
                                <li><h3>Event Name</h3></li>
                                <li><h3>Event Name</h3></li>

                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Slide >
        )
    }
}

    export default MyEvents;