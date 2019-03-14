import React, { Component } from "react";
import "./style.css";


class EventInfo extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="inputEventTitle">Event/Title:</label>
                    <input type="text" className="form-control" id="event-title-id" placeholder="Enter a name for this event" required />
                </div>
                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="inputDate">Date</label>
                        <input type="text" className="form-control" id="inputDate" />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="inputTime">Time to order by</label>
                        <input type="text" className="form-control" id="inputTime" placeholder="Select a time" />
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}

export default EventInfo;