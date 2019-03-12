import React from "react";
import "./style.css";
import Login from "./Login";

export const LandingPage = props => {
const {handleSignIn} = props
    return (
      <div>
        
        <div className="container">

        <div className="modal" id="signUpModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title text-center"> 
                        SignUp
                    </h4>
                </div>
                <div className="modal-body">
                    <p> Enter your email and password</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <button type="button" className="btn btn-success">SignUp | LogIn</button>
        </div>
    </div>
    <div className="landingPageTitle">
        <h1>Order Me This</h1>
        <h3>Organize your office lunch runs</h3>
    </div>

        <Login handleSignIn={handleSignIn}/>
      </div>
      </div>
    )
  }
