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
        let updatedOrder = {
            name: userName,
            foodOrder: this.state.foodOrder,
            specialRequest: this.state.specialRequest,
            price: this.state.price,
            date: moment().format('MMMM Do YYYY, h:mm:ss a')        };
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
            
                <div className="row flex-column">
                    <p>My Email: <b>{email}</b></p>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">My Name: <b>{name}</b></p>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">What I want: <b>{foodOrder}</b></p>
                        <Input
                            value={this.state.foodOrder}
                            onChange={this.handleInputChange}
                            name="foodOrder"
                            placeholder="Enter your order"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">Special Requests: <b>{specialRequest}</b></p>
                        <Input
                            value={this.state.specialRequest}
                            onChange={this.handleInputChange}
                            name="specialRequest"
                            placeholder="Enter any special needs"
                        />
                    </div>
                    <p>Date and Time of Last Change: <b>{date}</b></p>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">The price + tax: <b>{price}</b></p>
                        <Input
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            name="price"
                            placeholder="Enter the price + tax"
                        />
                    </div>
                </div>
                <div className="view-save">
                    <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={this.handleFormSubmit}>Update Order</button>
                </div>
            </div>
            </div>
        );
    }

}
export default Orders;