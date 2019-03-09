import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Email from "./pages/Email";
import Nav from "./components/Nav";
import Login from "./pages/Login";

export default class App extends Component {
  state = {
    errors: null,
    isMounted: false,
    user: {
      anonymous: true
    },
  }

  componentDidMount() {
    this.getCurrentUser()
    this.setState({ isMounted: true })
  }

  getCurrentUser = async () => {
    const response = await fetch('/api/me')
    if (response.status === 200) {
      const user = await response.json()
      this.setState({ user: { ...user, anonymous: false } })
    } else {
      const user = await response.json()
      this.setState({ user })
      // handle other response
    }
  }

handleSignIn = () => {
  this.setState({user:{anonymous:false}})
}

  render = () => {
    if (!this.state.isMounted) {
      return <div>Loading...</div>
    }

    if (this.state.user.anonymous) {
      return <Login errors={this.state.errors} onSignIn={this.handleSignIn} />
    }

    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            {/* <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} /> */}
            <Route exact path="/" component={Email} />
            <Route component={NoMatch} />
            <button onClick={this.logout}>Logout</button>
          </Switch>
        </div>
      </Router>
    );
  }
}
