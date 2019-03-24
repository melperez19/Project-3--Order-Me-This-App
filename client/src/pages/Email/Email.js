import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea } from "../../components/Form";
import { Link } from "react-router-dom";
import "./Email.css";
import TextField from '@material-ui/core/TextField';
import API from "../../utils/API";
const moment = require('moment');


class Email extends Component {
    state = {
        eventName: "",
        eventDateTime: "",
        orderDateTime: "",
        restaurantName: "",
        restaurantMenuURL: "",
        sendToEmail: [],
        fromName: "",
        message: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("button clicked")
        this.sendEmail(
            "default_service",
            "template_UtW4u8r2",
            this.state.eventName,
            this.state.eventDateTime,
            this.state.orderDateTime,
            this.state.restaurantName,
            this.state.restaurantMenuURL,
            this.state.sendToEmail,
            this.state.fromName,
            this.state.message
        )
        this.setState({
            formSubmitted: true
        })
    }

    sendEmail(service_id, template, eventName, eventDateTime, orderDateTime, restaurantName, restaurantMenuURL, sendToEmail, fromName, message) {
        API.saveEvent({
            eventName: this.state.eventName,
            eventDateTime: this.state.eventDateTime,
            orderDateTime: this.state.orderDateTime,
            restaurantName: this.state.restaurantName,
            restaurantMenuURL: this.state.restaurantMenuURL,
            sendToEmail: this.state.sendToEmail,
            fromName: this.state.fromName,
            message: this.state.message
        })
        .then(eventDb => {
            console.log(eventDb);
            let sendToEmail = eventDb.data.sendToEmail;
            let emailArray = sendToEmail.split(/[ ,]+/);
            let newOrders = emailArray.map(email => {
                return {
                    eventID: eventDb.data._id,
                    email: email,
                    date: moment().format('MMMM Do YYYY, h:mm:ss a')
                }
            });
            var template_params = {
                event_name: eventName,
                event_id: eventDb.data._id,
                event_date: eventDateTime,
                order_date: orderDateTime,
                restaurant_name: restaurantName,
                restaurant_menu_URL: restaurantMenuURL,
                to_email: sendToEmail,
                from_name: fromName,
                // order_me_this_event_link: "https://powerful-journey-65247.herokuapp.com/",
                order_me_this_event_link: "http://localhost:3000/event",
                message_html: message
            }
            window.emailjs.send(
                service_id,
                template,
                template_params
            ).then(res => {
                alert("Sent!");
                API.createNewOrder(newOrders).then(orderDb => this.setState({ formEmailSent: true }));
                
            })
        })
        .catch(err => console.error('Failed to send email. Error: ', err))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="12">
                        <form>
                            <small>The title will be a reference in MyEvents and a link to this event.</small>
                            <Input
                                value={this.state.eventName}
                                onChange={this.handleInputChange}
                                name="eventName"
                                placeholder="Event Name"
                            />
                            <small>Separate emails by a comma (ex. Joe@gmail.com, Mandy@email.com).</small>
                            <TextArea
                                value={this.state.sendToEmail}
                                onChange={this.handleInputChange}
                                name="sendToEmail"
                                placeholder="Send To Email (required)"
                            />
                            <small>Fill out some details for the invitations.</small>
                            <Input
                                value={this.state.restaurantName}
                                onChange={this.handleInputChange}
                                name="restaurantName"
                                placeholder="Name of Restaurant"
                            />
                            <Input
                                value={this.state.restaurantMenuURL}
                                onChange={this.handleInputChange}
                                name="restaurantMenuURL"
                                id="inputEmailInvite"
                                placeholder="Restaurant Menu Link"
                            />
                           <div className="flex-row d-flex mb-3">
                             <div className="textFieldBorder">
                            <TextField
                                id="datetime-local"
                                label="Date/Time of Event"
                                type="datetime-local"
                                onChange={this.handleInputChange}
                                value={this.state.eventDateTime ? this.state.eventDateTime : "2019-03-21T10:30"}
                                name="eventDateTime"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                                </div>
                             <div className="textFieldBorder">
                            <TextField
                                id="datetime-local"
                                label="Order Must Be Placed By"
                                type="datetime-local"
                                onChange={this.handleInputChange}
                                value={this.state.orderDateTime ? this.state.orderDateTime : "2019-03-21T10:30"}
                                name="orderDateTime"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                               </div>
                            </div>
                            <TextArea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                                placeholder="Email Message(Optional)"
                            />
                            <div className="d-flex align-items-center">
                                <p className="emailLetterText">
                                    From </p>
                                <Input
                                    value={this.state.fromName}
                                    onChange={this.handleInputChange}
                                    name="fromName"
                                    placeholder="From Name (Optional)"
                                /></div>
                            <div className="row d-flex justify-content-end">
                                <Link className="navbar-brand" to="/confirm">
                                    <div type="submit"
                                        className="btn btn-general"
                                        disabled={!(this.state.sendToEmail &&
                                            this.state.eventName &&
                                            this.state.restaurantName &&
                                            this.state.eventDateTime &&
                                            this.state.orderDateTime)}
                                        onClick={this.handleFormSubmit}>
                                        Confirm</div>
                                </Link>
                                <button
                                    className="btn btn-general mx-3"
                                    disabled={!(this.state.sendToEmail &&
                                        this.state.eventName &&
                                        this.state.restaurantName &&
                                        this.state.eventDateTime &&
                                        this.state.orderDateTime)}
                                    onClick={this.handleFormSubmit}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Email;
