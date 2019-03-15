import React, { Component } from "react";
import "./Event.css";


class Event extends Component {
    render() {
        return (
            
            <div className="eventBackground">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="fromName"></div>
                            <div className="eventName"></div>
                            <div className="eventDateTime"></div>
                            <div className="orderDateTime"></div>
                            <div className="restaurantName"></div>
                            <div className="order"></div>
  
                        </div>
                    </div>

                </div>

            </div>
           
        )
    }
}

export default Event;