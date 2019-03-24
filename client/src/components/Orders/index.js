import React, { Component } from "react";
import "./style.css";
import { Input } from "../../components/Form";

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
        let updatedOrder = {
            name: this.state.name,
            foodOrder: this.state.foodOrder,
            specialRequest: this.state.specialRequest,
            price: this.state.price
        };
        this.props.updateOrder(this.props.id, updatedOrder)
    }
    render() {
        const {
            email,
            date
        } = this.props
        return (
        <div className="orders">
            <h4 className="mr-3 mt-3">Fill in the blanks to make your order</h4>
            <div className="results-area mt-1 p-5">
            
                <div className="row flex-column">
                    <p>My Email: {email}</p>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">My Name: </p>
                        <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">What I want:</p>
                        <Input
                            value={this.state.foodOrder}
                            onChange={this.handleInputChange}
                            name="foodOrder"
                            placeholder="Enter your order"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">Special Requests: </p>
                        <Input
                            value={this.state.specialRequest}
                            onChange={this.handleInputChange}
                            name="specialRequest"
                            placeholder="Enter any special needs"
                        />
                    </div>
                    <p>Order by (date and time): {date}</p>
                    <div className="d-flex align-items-center">
                        <p className="mr-3">The price + tax: </p>
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
                        onClick={this.handleFormSubmit}>Submit</button>
                </div>
            </div>
            </div>
        );
    }

}
export default Orders;