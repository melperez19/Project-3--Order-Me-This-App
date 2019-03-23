import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import "./style.css";
// import Login from "../../pages/Login";
// import Logout from "../Logout";
import ApplicationContext from '../../ApplicationContext';

class Nav extends Component {
  static contextType = ApplicationContext;

  state = {
    open: false,
    width: window.innerWidth
  };

  logout = () => {
    this.context.setUser({ anonymous: true })
    this.context.auth.logout();
    this.setState({
      isLoading: true,
    }, () => {
      fetch('/api/account/logout')
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoading: false 
          }, () => {window.location.replace("/home")});
        });
    });
  }

  render() {
    return (
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
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                to="/home"
              >
                Create Event
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/myEvents" ? "nav-link active" : "nav-link"}
                to="/myEvents"
              >
                My Events
              </Link>
            </li>

            <li
              onClick={this.logout}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
                Logout
              {/* <Link */}
              {/* // input type="button" */}
              {/* </Link> */}
            </li>



          </ul>
        </div>
      </nav >
    );
  }
}

export default Nav;


