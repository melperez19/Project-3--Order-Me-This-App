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
            <div className="landingPageBackground d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex align-items-center landingPageMainText">
                        <div className="col">
                            <div className="landingPageTitle">
                                <h1 className="text-center">Order Me This</h1>
                                <h4>Organize your office lunch runs</h4>
                            </div>

                        </div>
                        <div className="col d-flex justify-content-center flex-column">
                            <input type="button"
                                onClick={this.toggleModal}
                                id="signUpButton"
                                value="SignUp | LogIn"
                                className="btn btn-primary" />

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