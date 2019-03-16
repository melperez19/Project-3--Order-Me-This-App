import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ApplicationContext from '../ApplicationContext';
import 'whatwg-fetch';

class Login extends Component {
  static contextType = ApplicationContext;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    fetch('/api/account/verify')
      .then(res => res.json())
      .then(json => {
        this.setState({ isLoading: false });
      });
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail.trim(),
        password: signInPassword.trim(),
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.context.setUser({...json.user, anonymous: false })
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
          }, this.props.handleSignIn);
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    }, () => {
      fetch('/api/account/logout')
        .then(res => res.json())
        .then(json => {
          this.setState({ isLoading: false });
        });
    });
}

  render() {
    const {
      isLoading,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;
    const { user } = this.context;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (user.anonymous) {
      return (
        <div>

          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <div className="row">
              <p>Sign In To Start Ordering!</p>
              </div>
              <div className="row">
              <div className="col d-flex flex-column justify-content-center">
                <input
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  className="flex-grow"
                  onChange={this.onTextboxChangeSignInEmail}
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  className="flex-grow"
                  onChange={this.onTextboxChangeSignInPassword}
                />
              </div>
              <div className="col d-flex justify-content-end">
                <button className="btn btn-primary" onClick={this.onSignIn}>Login</button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <div className="row">
              <p>Sign Up</p>
            </div>
            <div className="row">
              <div className="col d-flex flex-column justify-content-center">
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  className="flex-grow"
                  onChange={this.onTextboxChangeSignUpEmail}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  className="flex-grow"
                  onChange={this.onTextboxChangeSignUpPassword}
                />
              </div>
              <div className="col d-flex justify-content-end">
                <button className="btn btn-primary" onClick={this.onSignUp}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
     
      <div>
        
        <button className="btn btn-primary" onClick={this.logout}>Logout</button>
        <br />
        <button className="btn btn-primary" onClick={<Link className="navbar-brand" to="/home" />}>
          Take me to the Home Page
        </button>
        
      </div>
    );
  }
}

export default Login;