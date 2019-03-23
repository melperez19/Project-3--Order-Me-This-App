import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slide from 'react-reveal/Slide';
import "./Event.css";
import CreatedEvents from "../../components/CreatedEvents";
import API from "../../utils/API";
import Orders from "../../components/Orders";

class MyEvents extends Component {
    state = {
        eventById: [],
        sendToEmails: []
    }

    getEvent = (id) => {
        API.getEvent(id)
            .then(res => this.setState({ eventById: res.data }))
            .catch(err => console.log(err));
    };
    deleteEvent = (id) => {
        API.deleteEvent(id)
            .catch(err => console.log(err));
    };
    render() {
        return (
            <Slide left>
                <div>
                    <Nav />
                    <div className="container d-flex justify-content-center">
                        <div className="eventsBackground justify-content-center">
                            <div className="eventsTitle col text-center">
                                <h1> My Events - All events made by Host </h1>
                            </div>
                            <div className="eventsArea p-3">
                                <small>See event details and add your order.</small>

                                {this.state.eventById.length ?
                                    this.state.eventbyId.map(event => (
                                        <CreatedEvents
                                            key={event._id}
                                            id={event._id}
                                            deleteEvent={this.deleteEvent}
                                            eventName={event.eventName}
                                            eventDateTime={event.eventDateTime}
                                            message={event.message}
                                            orderDateTime={event.orderDateTime}
                                            restaurantMenuURL={event.restaurantMenuURL}
                                            restaurantName={event.restaurantName}
                                            sendToEmail={event.sendToEmail}
                                        />
                                    )) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>
                            <div className="ordersArea p-3">
                                <small>Fill in the blanks to make your order</small>

                                {this.state.sendToEmails.length ?
                                    this.state.sendToEmails.map(email => (
                                        <Orders
                                            key={email._id}
                                            id={email._id}
                                            name={email.name}
                                            foodOrder={email.foodOrder}
                                            specialRequest={email.specialRequest}
                                            price={email.price}
                                            date={email.date}
                                        />
                                    )) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>

            </Slide >
        )
    }
}
export default MyEvents;