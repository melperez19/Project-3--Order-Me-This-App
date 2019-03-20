import React from "react";
import "./style.css";

function CreatedEvents({
    deleteEvent,
    eventName,
    eventDateTime,
    id,
    restaurantMenuURL,
    message,
    orderDateTime,
    restaurantName,
    sendToEmail,
}) {
    return (
        <div className="results-area mt-4 px-5">
            <div className="row d-flex eventTitleInfo-and-buttons">
                <div className={`flex-grow-1 event-${id}`}>
                    <p>Title: {eventName}</p>
                    <p>Location: {restaurantName}</p>
                    <p>Date of event: {eventDateTime}</p>
                    <p>Order by (date and time): {orderDateTime}</p>
                    <p>Invitation sent to: {sendToEmail}</p>
                </div>
                <div className="view-save">
                    <a className="btn btn-outline-primary mx-2"
                        role="button" href={restaurantMenuURL}
                        target="_blank" rel="noopener noreferrer">View</a>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={() => deleteEvent(id)}>Delete</button>
                </div>
            </div>
            <div className="row d-flex summary">
                <div className="col-9 event-summary">
                    
                    <p>{message}</p>
                </div>
            </div>
        </div>

    );
}
export default CreatedEvents;