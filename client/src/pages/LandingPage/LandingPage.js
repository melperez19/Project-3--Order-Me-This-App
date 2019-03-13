import React, { Component } from "react";
import "./LandingPage.css";
import Modal from "../../components/Modal";
import Login from "../Login";

class LandingPage extends Component {

    state = {
        show: false,
    };

    toggleModal = () => {
        let show = !this.state.show
        this.setState({ show })
    };

    render() {
        return (
            <div className="landingPageBackground">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-end">
                        <div className="col">
                            <div className="landingPageTitle">
                                <h1>Order Me This</h1>
                                <h3>Organize your office lunch runs</h3>
                            </div>

                        </div>
                        <div className="col d-flex justify-content-center flex-column">
                            <input type="button"
                                onClick={this.toggleModal}
                                id="signUpButton"
                                value="SignUp | LogIn"
                                className="btn btn-success" />

                            <Modal
                                show={this.state.show}
                                onClose={this.toggleModal}>
                                <Login handleSignIn={this.props.handleSignIn} />
                            </Modal>
                        </div>

                    </div>


                </div>

            </div>
        )

    }
}

export default LandingPage;