import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea } from "../../components/Form";
import "./Email.css";
import Event from "../../pages/Event/Event";
// import TextField from '@material-ui/core/TextField';

class Confirm extends Component {
    state = {
        eventName: "",
        eventDateTime: "",
        orderDateTime: "",
        restaurantName: "",
        restaurantMenuURL: "",
        sendToEmail: [],
        // sendToName: [],
        fromName: "",
        message: ""
    };
    render() {
        return (
            <div>
                <Event>
                    <div className="row d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Confirm</button>
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
                    </div>
                </Event>

            </div>

        )
    }
}
export default Confirm;