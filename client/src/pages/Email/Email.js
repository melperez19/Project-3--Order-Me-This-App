import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea } from "../../components/Form";
import "./Email.css";

class Email extends Component {
    state = {
        eventName: "",
        eventDateTime: "",
        orderDateTime: "",
        restaurantName: "",
        sendToEmail: [],
        // sendToName: [],
        fromName: "",
        message: ""
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
            this.state.sendToEmail,
            // this.state.sendToName,
            this.state.fromName,
            this.state.message
        )

        this.setState({
            formSubmitted: true
        })
    }

    sendEmail(service_id, template, eventName, eventDateTime, orderDateTime, restaurantName, sendToEmail, fromName, message) {
        var template_params = {
            event_name: eventName,
            event_date: eventDateTime,
            order_date: orderDateTime,
            restaurant_name: restaurantName,
            to_email: sendToEmail,
            from_name: fromName,
            // to_name: sendToName,
            message_html: message
        }
        window.emailjs.send(
            service_id,
            template,
            template_params
        ).then(res => {
            this.setState({ formEmailSent: true });
            alert("Sent!");
            // this.setState({
            //     sendToEmail: "",
            //     sendToName: "",
            //     fromName: "",
            //     message: ""            
            // })

        }).catch(err => console.error('Failed to send email. Error: ', err))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="12">
                        <form>
                            {/* <div >
                                <p className="emailLetterText">
                                    Dear  <Input
                                    value={this.state.sendToName}
                                    onChange={this.handleInputChange}
                                    name="sendToName"
                                    placeholder="Send To Name (required)"
                                /></p>
                            </div> */}

                            <small>The title will be a reference in MyEvents and a link to this event.</small>
                            <Input
                                value={this.state.eventName}
                                onChange={this.handleInputChange}
                                name="eventName"
                                placeholder="Event Name"
                            />
                            <small>Separate emails by a comma (ex. Joe@gmail.com, Mandy@email.com).</small>
                            <Input
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
                                value={this.state.eventDateTime}
                                onChange={this.handleInputChange}
                                name="eventDateTime"
                                placeholder="Date and Time of Event"
                            />

                            <Input
                                value={this.state.orderDateTime}
                                onChange={this.handleInputChange}
                                name="orderDateTime"
                                placeholder="Date and Time Orders Must Be Placed By"
                            />

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
                                <button type="submit" className="btn btn-primary">Confirm</button>
                                <button
                                    className="btn btn-primary mx-3"
                                    disabled={!(this.state.sendToEmail)}
                                    onClick={this.handleFormSubmit}
                                >
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
