import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Email from "./pages/Email";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { LandingPage } from "./pages/LandingPage";
import { Home } from "./pages/Home";
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
            {/* <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} /> */}

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
            <Route component={NoMatch} />
          </Switch>

        </div>
      </Router>
    );
  }
}
