import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseApp, payments } from "../firebaseConfig";

class EmailSignup extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      name: "",
      email: "",
      password: ""
    };
  }

  createUser() {
    const { email, name, password } = this.state;

    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          payments
            .push()
            .set({
              user: res.user.uid,
              mentor: false,
              discord: false,
              course: false
            })
            .then(res => {
              window.location = window.location.href + "payment";
            });
        }
      });
  }

  render() {
    const { expanded } = this.state;
    const { facebook } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <div className="home-buttons">
          {facebook}
          <button
            className="facebook-login-button home-email-button"
            onClick={() => {
              this.setState({
                ...this.state,
                expanded: true
              });
            }}
          >
            <i
              className="fa fa-send"
              style={{
                fontSize: "22px"
              }}
            />
            <span className="facebook-login-button__text">Sign up today</span>
          </button>
        </div>
        <form
          className={`home-form${expanded ? " home-form--visible" : ""}`}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="form-container">
            {/* <section>
              <label className="home-label" htmlFor="name">
                Name
              </label>
              <input
                onChange={e => {
                  this.setState({
                    ...this.state,
                    name: e.target.value
                  });
                }}
                className="home-input"
                type="text"
                name="name"
                placeholder="Ross Libby"
              />
            </section> */}
            <section>
              <label className="home-label" htmlFor="email">
                Email
              </label>
              <input
                onChange={e => {
                  this.setState({
                    ...this.state,
                    email: e.target.value
                  });
                }}
                className="home-input"
                type="email"
                name="email"
                placeholder="hello@rosslibby.com"
              />
            </section>
            <section>
              <label className="home-label" htmlFor="password">
                Password
              </label>
              <input
                onChange={e => {
                  this.setState({
                    ...this.state,
                    password: e.target.value
                  });
                }}
                className="home-input"
                type="password"
                name="password"
                placeholder="********"
              />
            </section>
            <section>
              <button
                className="facebook-login-button home-email-button"
                onClick={() => {
                  this.createUser();
                }}
              >
                <i
                  className="fa fa-send"
                  style={{
                    fontSize: "22px"
                  }}
                />
                <span className="facebook-login-button__text">Sign up</span>
              </button>
            </section>
          </div>
        </form>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  emailProvider: new firebase.auth.EmailAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(EmailSignup);
