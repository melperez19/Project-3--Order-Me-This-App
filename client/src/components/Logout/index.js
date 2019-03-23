import React from "react";
import "./style.css";
// import { logout } from "../../components/Nav";
import {Link} from "react-router-dom";

function Logout(){
    
        return(
            <li className="nav-item">
              <Link
                // input type="button"
                value="Log Out"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/">
                {/* <Login logout={this.props.logout} /> */}
              </Link>
            </li>
        // <button className="btn btn-general" onClick={this.logout}>Logout</button>
    );
}
export default Logout;