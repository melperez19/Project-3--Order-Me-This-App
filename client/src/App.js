import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch/NoMatch";
import Email from "./pages/Email/Email";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage/LandingPage";
import Event from "./pages/Event/Event";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Home from "./pages/Home/Home";
import { ProtectedRoute } from "./utils/protectRoute";
import auth from "./utils/auth";

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
    auth.login((isAuthenticated)=> {
      this.setState({ user: { anonymous: isAuthenticated } })
    })
  }

  render = () => {
    if (!this.state.isMounted) {
      return <div>Loading...</div>
    }

    

    return (
      
      <Router>
        
        <div>
        <Nav />
          <Switch>

            <Route exact path="/" render={()=>( 
              auth.isAuthenticated() ? (
                <Home/>
              ) : (
                <LandingPage handleSignIn={this.handleSignIn}/>
              )
            ) }/>

            {/* <Route exact path="/" component={LandingPage} />
            <ProtectedRoute exact path="/app" component={Home} /> */}
            <Route exact path="/email" component={Email} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/create" component={CreateEvent} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}
