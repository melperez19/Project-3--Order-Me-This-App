import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
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

    sendEmail (service_id, template, eventName, eventDateTime, orderDateTime, restaurantName, sendToEmail, sendToName, fromName, message) {
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
            this.setState({ formEmailSent: true});
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
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Send Email</h1>
                        </Jumbotron>
                        <form>
                        <Input
                                value={this.state.eventName}
                                onChange={this.handleInputChange}
                                name="eventName"
                                placeholder="Event Name"
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
                            <Input
                                value={this.state.restaurantName}
                                onChange={this.handleInputChange}
                                name="restaurantName"
                                placeholder="Name of Restaurant"
                            />
                            <Input
                                value={this.state.sendToEmail}
                                onChange={this.handleInputChange}
                                name="sendToEmail"
                                placeholder="Send To Email (required)"
                            />
                            <Input
                                value={this.state.sendToName}
                                onChange={this.handleInputChange}
                                name="sendToName"
                                placeholder="Send To Name (required)"
                            />
                            <Input
                                value={this.state.fromName}
                                onChange={this.handleInputChange}
                                name="fromName"
                                placeholder="From Name (Optional)"
                            />
                            <TextArea
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                                placeholder="Email Message(Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.sendToName && this.state.sendToEmail)}
                                onClick={this.handleFormSubmit}
                            >
                                Send
                            </FormBtn>
                        </form>
                    </Col>
                    {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
                </Row>
            </Container>
        );
    }
}

export default Email;
