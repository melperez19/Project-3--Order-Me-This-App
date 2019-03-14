import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch/NoMatch";

import LandingPage from "./pages/LandingPage/LandingPage";
import Event from "./pages/Event/Event";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/home" component={Event} />
            <Route exact path="/confirm" component={ConfirmOrder} />
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}
