import React from "react";
import "./style.css";
// import { Link } from 'react-router';
import {
    Link
} from "react-router-dom";

function CreatedEvents({
    deleteEvent,
    eventName,
    eventDateTime,
    id,
    restaurantMenuURL,
    message,
    orderDateTime,
    restaurantName,
    sendToEmail
}) {
    return (
        <div className="mt-4 px-5">
            <div className="row d-flex eventTitleInfo-and-buttons">
                <div className={`flex-grow-1 event-${id}`}>
                    <p>Title: <b><Link to={`/event/${id}`}>{eventName}</Link></b></p>
                    <p>Location: <b>{restaurantName}</b></p>
                    <p>Date of event: <b>{eventDateTime}</b></p>
                    <p>Order by (date and time): <b>{orderDateTime}</b></p>
                    <p>Invitation sent to: <b>{sendToEmail}</b></p>
                </div>
                <div className="view-save">
                    <a className="btn btn-outline-general mx-2"
                        role="button" href={restaurantMenuURL}
                        target="_blank" rel="noopener noreferrer">View Menu</a>
                    <button
                        type="button"
                        className="btn btn-general mx-2"
                        onClick={() => deleteEvent(id)}>Delete</button>
                </div>
            </div>
            <div className="row d-flex summary">
                <div className="col-9 event-summary">
                    
                    <p><b>{message}</b></p>
                </div>
            </div>
        </div>

    );
}

export default CreatedEvents;