import React, { Component } from "react";
import "./style.css";
import { Input } from "../../components/Form";
const moment = require('moment');

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            foodOrder: "",
            specialRequest: "",
            price: ""
        }
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        let userName = this.state.name ? this.state.name : this.props.name;
        let orderRequest = this.state.foodOrder ? this.state.foodOrder : this.props.foodOrder;
        let special = this.state.specialRequest ? this.state.specialRequest : this.props.specialRequest;
        let pricing = this.state.price ? this.state.price : this.props.price;
        let updatedOrder = {
            name: userName,
            foodOrder: orderRequest,
            specialRequest: special,
            price: pricing,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        };
        this.props.updateOrder(this.props.id, updatedOrder)
    }

    render() {
        const {
            name,
            foodOrder,
            specialRequest,
            price,
            email,
            date
        } = this.props

        return (
            <div className="orders">
                <h4 className="mr-3 mt-3">Fill in the blanks to make your order</h4>
                <div className="results-area mt-1 p-5">

                    <div className="row">
                        <div className="col-12">
                            <p>My Email: <b>{email}</b></p>
                        </div>

                        <div className="col-6">
                            <div>
                                <Input
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    name="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <Input
                                    value={this.state.foodOrder}
                                    onChange={this.handleInputChange}
                                    name="foodOrder"
                                    placeholder="Enter your order"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <Input
                                    value={this.state.specialRequest}
                                    onChange={this.handleInputChange}
                                    name="specialRequest"
                                    placeholder="Enter any special needs"
                                />
                            </div>
                            <div>
                                <Input
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    name="price"
                                    placeholder="Enter the price + tax"
                                />
                            </div>
                        </div>
                    </div>
                    <p>Saved as: Name: <strong>{name}</strong>,
                                Order: <strong>{foodOrder}</strong>,
                                Price: <strong>{price}</strong>,
                                Special Requests: <strong>{specialRequest}</strong>
                    </p>
                    <div className="update-button">
                        <button
                            type="button"
                            className="btn btn-primary mx-2"
                            onClick={this.handleFormSubmit}>Update Order
                        </button>
                    </div>
                    <div className="col-12">
                        <p>Date and Time of Last Change: <b>{date}</b></p>
                    </div>


                </div>
            </div>
        );
    }

}
export default Orders;