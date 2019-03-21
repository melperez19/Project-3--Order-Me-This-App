import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea } from "../../components/Form";
import "./Email.css";
import Event from "../../pages/Event/Event";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Confirm extends Component {
    state = {
        event: []
    };
    getEvent = (id) => {
        API.getEvent(id)
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <Event>
                    <div className="row d-flex justify-content-end">
                        <Link className="navbar-brand" to="/event">
                            <button
                                className="btn btn-primary mx-3"
                                disabled={!(this.state.sendToEmail &&
                                    this.state.eventName &&
                                    this.state.restaurantName &&
                                    this.state.eventDateTime &&
                                    this.state.orderDateTime)}
                                onClick={this.handleFormSubmit}
                            >
                                Send
                            </button>
                        </Link>
                    </div>
                </Event>

            </div>

        )
    }
}
export default Confirm;