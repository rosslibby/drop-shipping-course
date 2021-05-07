import React, { Component } from "react";
import * as actions from "./actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import {
  Header,
  Home,
  Portal,
  PrivacyPolicy,
  Resources,
  Steps,
  Teacher,
  Teachers
} from "./components";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseApp } from "./firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { user, signOut } = this.props;

    return (
      <Router>
        <React.Fragment>
          {user ? (
            <div>
              <Header>
                <Link to="/">Portal</Link>
                <Link to="/guide">Guide</Link>
                {/* <Link to="/educators">Teachers</Link> */}
                <Link to="/resources">Resources</Link>
                <button
                  onClick={signOut}
                  style={{
                    display: "flex",
                    border: "0",
                    justifyContent: "center",
                    background: "none",
                    padding: "10px 0",
                    color: "#ffffff"
                  }}
                >
                  Sign out
                </button>
              </Header>
              <Container>
                <Switch>
                  <Route
                    path="/educators/:id"
                    children={({ match }) => <Teacher />}
                  />
                </Switch>
                <Switch>
                  <Route exact path="/educators">
                    <Teachers />
                  </Route>
                </Switch>
                <Switch>
                  <Route path="/resources">
                    <Resources />
                  </Route>
                </Switch>
                <Switch>
                  <Route path="/guide">
                    <Steps />
                  </Route>
                </Switch>
                <Switch>
                  <Route path="/privacy-policy">
                    <PrivacyPolicy />
                  </Route>
                </Switch>
                <Switch>
                  <Route path="/congratulations">
                    <Home user={user} />
                  </Route>
                </Switch>
                <Switch>
                  <Route path="/portal">
                    <Portal user={user.uid} />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path="/">
                    <Portal user={user.uid} />
                  </Route>
                </Switch>
              </Container>
            </div>
          ) : (
            <div>
              <Home />
            </div>
          )}
        </React.Fragment>
      </Router>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  emailProvider: new firebase.auth.EmailAuthProvider()
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(
  connect(
    mapStateToProps,
    actions
  )(App)
);
