import React from "react";
import "./style.css";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs =
    [
        { headerName: "Name", field: "name"},
        { headerName: "Email", field: "email"},
        { headerName: "Order", field: "foodOrder"},
        { headerName: "Price", field: "price"},
        { headerName: "Special Request", field: "specialRequest"}
    ]


function EventSummary(props) {
    
    const {
        eventName,
        eventDateTime,
        id,
        restaurantMenuURL,
        message,
        orderDateTime,
        restaurantName,
        sendToEmail,
        orders
    } = props

    return (
        <div className="mt-4 px-5">
            <div className="row">
                <div className={`col event-${id} event-summary` }>
                    <p>Title: <strong>{eventName}</strong></p>
                    <p>Location: <strong>{restaurantName}</strong></p>
                    <p>Date of event: <strong>{eventDateTime}</strong></p>
                    <p>Order by (date and time): <strong>{orderDateTime}</strong></p>
                </div>
                <div className="col">
                    <a className="btn btn-outline-general mx-2"
                        role="button" href={restaurantMenuURL}
                        target="_blank" rel="noopener noreferrer">View Menu
                    </a>
                </div>
                <div className="col-12">
                <p>Invitation(s) sent to: <strong>{sendToEmail}</strong></p>
                    <p>Message included(optional): <strong>{message}</strong></p>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col-12 order-summary">
                <p><small>Summary of orders are below. Columns can be dragged by order of importance to you.</small></p>
                    <div
                        className="ag-theme-balham "
                        style={{ height: '200px'}}
                    >
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={orders}>
                        </AgGridReact>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EventSummary;