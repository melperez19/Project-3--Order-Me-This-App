import React, { Component } from "react";
import { 
  Link
} from "react-router-dom";
import "./style.css";
import ConfirmOrder from "../../pages/ConfirmOrder/ConfirmOrder";
import EventInfo from "../../pages/Event/Event";







class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

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
                Create Event {EventInfo}
      </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/confirm" ? "nav-link active" : "nav-link"}
                to="/confirm"
              >
                Confirm Order {ConfirmOrder}
      </Link>
            </li>
            
           

          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;


