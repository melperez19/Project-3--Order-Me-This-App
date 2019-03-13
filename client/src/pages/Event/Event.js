import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
    render() {
        return (
            <div className="eventBackground">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="EventTitle"></div>
                            <div className="Date"></div>
                            <div className="Notes"></div>
                            <div className="Location"></div>
                            <div className="Deadline"></div>
                            <div className="Order"></div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Event;