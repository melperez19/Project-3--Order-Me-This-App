import React, { Component } from "react";
import "./LandingPage.css";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import Login from "../Login";
import { Container } from "../../components/Grid";
import {
    Link
} from "react-router-dom";

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
            <Container>

                <nav className="navbar navbar-expand-lg bg-light fixed-top navbar-light mb-2">
                    <Link className="navbar-brand" to="/">
                        Order Me This
                    </Link>
                    <button
                        onClick={this.toggleNav}
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>

                <div className="landingPageBackground d-flex align-items-center justify-content-center">
                    <div className="landingPageMainText mx-3">
                        <div className="col">
                            <div className="landingPageTitle">
                                <h1 className="text-center">Order Me This</h1>
                                <h4>Organize your office lunch runs</h4>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center flex-column mb-3">
                            <input type="button"
                                onClick={this.toggleModal}
                                id="signUpButton"
                                value="SignUp | LogIn"
                                className="btn btn-general" />
                            <Modal
                                show={this.state.show}
                                onClose={this.toggleModal}>
                                <Login handleSignIn={this.props.handleSignIn} />
                            </Modal>
                        </div>
                    </div>
                </div>
                <Footer />
            </Container>
        )
    }
}

export default LandingPage;