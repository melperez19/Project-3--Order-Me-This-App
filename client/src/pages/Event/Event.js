import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./Event.css";
import EventSummary from "../../components/EventSummary";
import API from "../../utils/API";
import Orders from "../../components/Orders";

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventById: {},
            orders: []
        }
    }

    componentDidMount() {
        this.getEvent(this.props.match.params.id);
        this.findAllOrders(this.props.match.params.id);
    };

    getEvent = (id) => {
        API.getEvent(id)
            .then(res => this.setState({ eventById: res.data },
                console.log(res.data)
            ))
            .catch(err => console.log(err))
    };
    findAllOrders = (eventId) => {
        API.findAllOrders(eventId)
            .then(res => this.setState({ orders: res.data },
                console.log("find all ", res.data)
            ))
            .catch(err => console.log(err));
    };

    updateOrder = (orderId, updatedOrder) => {
        console.log(updatedOrder)
        API.updateOrder(orderId, updatedOrder)
            .then(res => this.findAllOrders(this.state.eventById._id))
            // .then(res => this.setState({ orders: res.data },
            //     console.log("find all ", res.data)
            // ))
            .catch(err => console.log(err));
    };

    render() {
        let event = this.state.eventById;
        let orders = this.state.orders;
        return (
            <Slide left>
                <div>
                    <Nav />
                    <div className="container d-flex justify-content-center">
                        <div className="eventBackground justify-content-center">
                            <div className="eventBody">
                                <div className="eventsTitle col text-center text-white">
                                    <h1> Event Summary </h1>
                                </div>
                                <div className="eventArea p-3">
                                    <h4>See event details and add your order below.</h4>

                                    {this.state.eventById ?
                                        <EventSummary
                                            key={event._id}
                                            id={event._id}
                                            eventName={event.eventName}
                                            eventDateTime={event.eventDateTime}
                                            message={event.message}
                                            orderDateTime={event.orderDateTime}
                                            restaurantMenuURL={event.restaurantMenuURL}
                                            restaurantName={event.restaurantName}
                                            sendToEmail={event.sendToEmail}
                                        />
                                        : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </div>
                                <div className="ordersArea p-3">

                                    {orders.length ?
                                        orders.map(order => (
                                            <Orders
                                                key={order._id}
                                                id={order._id}
                                                email={order.email}
                                                name={order.name}
                                                foodOrder={order.foodOrder}
                                                specialRequest={order.specialRequest}
                                                price={order.price}
                                                date={order.date}
                                                updateOrder={this.updateOrder}
                                            />
                                        )) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slide >
        )
    }
}
export default Event;