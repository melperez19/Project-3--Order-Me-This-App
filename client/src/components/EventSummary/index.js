import React, { Component } from "react";
import "./style.css";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import API from "../../utils/API";

class EventSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            columnDefs: [
                { headerName: "Name", field: "name" },
                { headerName: "Email", field: "email" },
                { headerName: "Order", field: "order" },
                { headerName: "Special Request", field: "specialRequest" },
                { headerName: "Price", field: "price" }

            ],
            rowData: [
                // {name: "Dan", email: "dan@email.com", order: "Orange Chicken", specialRequest: "spicy", price: 4.45},
                // {name: "Kieran", email: "kieran@gmail.com", order: "Sweet & Sour Chicken", specialRequest: "not spicy", price: 5.49},
                // {name: "Melissa", email: "melissa@email.com", order: "Broccoli Beef", specialRequest: "extra sauce", price: 7.25}
            ]
        }

    }

    findAllOrders = (eventId) => {
        API.findAllOrders(eventId)
            .then(rowData => this.setState({ rowData },
                console.log("find all ", rowData)
                ))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.findAllOrders(this.props.match.params.id);
    }
    render() {
        const {
            eventName,
            eventDateTime,
            id,
            restaurantMenuURL,
            message,
            orderDateTime,
            restaurantName,
            sendToEmail,
        } = this.props
        return (
            <div className="mt-4 px-5">
                <div className="row d-flex eventTitleInfo-and-buttons">
                    <div className={`flex-grow-1 event-${id}`}>
                        <p>Title: {eventName}</p>
                        <p>Location: {restaurantName}</p>
                        <p>Date of event: {eventDateTime}</p>
                        <p>Order by (date and time): {orderDateTime}</p>
                        <p>Invitation sent to: {sendToEmail}</p>
                    </div>
                    <div className="view-save">
                        <a className="btn btn-outline-general mx-2"
                            role="button" href={restaurantMenuURL}
                            target="_blank" rel="noopener noreferrer">View Menu</a>

                    </div>
                </div>
                <div className="row d-flex summary">
                    <div className="col-9 event-summary">

                        <p>{message}</p>
                        <div
                            className="ag-theme-balham"
                            style={{ height: '200px', width: '600px' }}
                        >
                            <AgGridReact
                                columnDefs={this.state.columnDefs}
                                rowData={this.state.rowData}>
                            </AgGridReact>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default EventSummary;