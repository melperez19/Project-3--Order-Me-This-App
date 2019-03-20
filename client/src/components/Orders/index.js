import React from "react";
import "./style.css";

function Orders({
    createNewOrder,
    id,
    link,
    name,
    foodOrder,
    specialRequest,
    price,
    date
}) {
    return (
        <div className="results-area mt-4 px-5">
            <div className="row d-flex orderTitleInfo-and-buttons">
                <div className={`flex-grow-1 email-${id}`}>
                    <p>My Name: {name}</p>
                    <p>What I want: {foodOrder}</p>
                    <p>Special Requests: {specialRequest}</p>
                    <p>Order by (date and time): {date}</p>
                    <p>The price + tax: {price}</p>
                </div>
                <div className="view-save">
                    <a className="btn btn-outline-primary mx-2"
                        role="button" href={link}
                        target="_blank" rel="noopener noreferrer">View Menu</a>
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={() => createNewOrder(id)}>Submit</button>
                </div>
            </div>
        </div>

    );
}
export default Orders;