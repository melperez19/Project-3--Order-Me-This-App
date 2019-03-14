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
        sendToName: [],
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
            this.state.sendToName,
            this.state.fromName,
            this.state.message
        )

        this.setState({
            formSubmitted: true
        })
    }

    sendEmail(service_id, template, eventName, eventDateTime, orderDateTime, restaurantName, sendToEmail, sendToName, fromName, message) {
        var template_params = {
            event_name: eventName,
            event_date: eventDateTime,
            order_date: orderDateTime,
            restaurant_name: restaurantName,
            to_email: sendToEmail,
            from_name: fromName,
            to_name: sendToName,
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
                            <div className="row d-flex align-items-center">
                                <p className="emailLetterText">
                                    Dear </p> <Input
                                    value={this.state.sendToName}
                                    onChange={this.handleInputChange}
                                    name="sendToName"
                                    placeholder="Send To Name (required)"
                                />
                            </div>
                            <Input
                                value={this.state.sendToEmail}
                                onChange={this.handleInputChange}
                                name="sendToEmail"
                                placeholder="Send To Email (required)"
                            />

                            <div className="row d-flex align-items-center">
                                <p className="emailLetterText">
                                    You are invited submit an order for this event called: </p>
                                <Input
                                    value={this.state.eventName}
                                    onChange={this.handleInputChange}
                                    name="eventName"
                                    id="inputEmailInvite"
                                    placeholder="Event Name"
                                /> <p className="emailLetterBodyText">
                                    at</p> <Input
                                    value={this.state.restaurantName}
                                    onChange={this.handleInputChange}
                                    name="restaurantName"
                                    id="inputEmailInvite"
                                    placeholder="Name of Restaurant"
                                /> <p className="emailLetterBodyText">
                                    on this date </p><Input
                                    value={this.state.eventDateTime}
                                    onChange={this.handleInputChange}
                                    name="eventDateTime"
                                    id="inputEmailInvite"
                                    placeholder="Date and Time of Event"
                                /><p className="emailLetterText">.</p></div>

                            <div className="row d-flex align-items-center">
                                <p className="emailLettTexter">Please order by</p> <Input
                                    value={this.state.orderDateTime}
                                    onChange={this.handleInputChange}
                                    name="orderDateTime"
                                    placeholder="Date and Time Orders Must Be Placed By"
                                /></div>

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
                                disabled={!(this.state.sendToName && this.state.sendToEmail)}
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
