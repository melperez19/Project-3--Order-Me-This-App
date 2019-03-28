import React from "react";
import "./style.css";

function EventSummary({
    eventName,
    eventDateTime,
    id,
    restaurantMenuURL,
    message,
    orderDateTime,
    restaurantName,
    sendToEmail,
}) {
    console.log(eventName)

    return (
        <div className= "mt-4 px-5">
            <div className="row d-flex eventTitleInfo-and-buttons">
                <div className={`flex-grow-1 event-${id}`}>
                    <p>Title: <b>{eventName}</b></p>
                    <p>Location: <b>{restaurantName}</b></p>
                    <p>Date of event: <b>{eventDateTime}</b></p>
                    <p>Order by (date and time): <b>{orderDateTime}</b></p>
                    <p>Invitation sent to: <b>{sendToEmail}</b></p>
                </div>
                <div className="view-save">
                    <a className="btn btn-outline-general mx-2"
                        role="button" href={restaurantMenuURL}
                        target="_blank" rel="noopener noreferrer">View Menu</a>
    
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
export default EventSummary;