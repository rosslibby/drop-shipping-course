import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import { firebaseApp, users } from "../firebaseConfig";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      expanded: false
    };
  }

  createUser() {
    const { email, name, password } = this.state;

    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          users
            .child(res.user.uid)
            .set({
              email,
              name,
              course: false,
              mentorship: false,
              discord: false
            })
            .then(res => {
              window.location.href = "/congratulations";
            });
          res.user.updateProfile({
            displayName: name
          });
        }
      })
      .catch(err => {
        if (err.code === "auth/email-already-in-use")
          alert(
            "It looks like you already have an account! Log in to access the portal."
          );
      });
  }

  signUpClicked(e) {
    e.preventDefault();
    const { expanded } = this.state;

    if (!expanded)
      this.setState({
        expanded: !expanded
      });
    else this.createUser();
  }

  render() {
    const { expanded } = this.state;
    return (
      <form className="home-form" onSubmit={e => e.preventDefault()}>
        <div className="form-container">
          <section
            className={`form-item${expanded ? " form-item--visible" : ""}`}
          >
            <label className="home-label" htmlFor="name">
              Name*
            </label>
            <input
              onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}
              className="home-input"
              required
              type="text"
              name="name"
              placeholder="Ross Libby"
            />
          </section>
          <section
            className={`form-item${expanded ? " form-item--visible" : ""}`}
          >
            <label className="home-label" htmlFor="email">
              Email*
            </label>
            <input
              onChange={e => {
                this.setState({
                  email: e.target.value
                });
              }}
              className="home-input"
              required
              type="email"
              name="email"
              placeholder="hello@rosslibby.com"
            />
          </section>
          <section
            className={`form-item${expanded ? " form-item--visible" : ""}`}
          >
            <label className="home-label" htmlFor="password">
              Password*
            </label>
            <input
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
              className="home-input"
              required
              type="password"
              name="password"
              placeholder="••••••••"
            />
          </section>
          <section style={{ paddingTop: "20px" }}>
            <button
              className="facebook-login-button home-email-button"
              onClick={e => this.signUpClicked(e)}
            >
              <i
                className="fa fa-send"
                style={{ fontSize: "22px" }}
                aria-hidden="true"
              />
              <span className="facebook-login-button__text">Sign up today</span>
            </button>
          </section>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
