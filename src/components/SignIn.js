import React, { Component } from "react";
import { firebaseApp } from "../firebaseConfig";
import Modal from "./Modal";

export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      modal: false,
      email: "",
      password: ""
    };
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        alert("Wrong email or password");
      });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="sign-in-header">
          Already have an account?{" "}
          <a
            style={{ marginLeft: "2px" }}
            href="./login"
            onClick={e => {
              e.preventDefault();
              this.toggleModal();
            }}
          >
            {" "}
            Sign in
          </a>
        </div>
        <Modal visible={this.state.modal} toggle={this.toggleModal.bind(this)}>
          <label className="home-label" htmlFor="email">
            Email*
          </label>
          <input
            onChange={e => {
              this.setState({
                ...this.state,
                email: e.target.value
              });
            }}
            className="home-input home-input--login"
            required
            type="email"
            name="email"
            placeholder="hello@rosslibby.com"
          />
          <label className="home-label" htmlFor="password">
            Password*
          </label>
          <input
            onChange={e => {
              this.setState({
                ...this.state,
                password: e.target.value
              });
            }}
            className="home-input home-input--login"
            required
            type="password"
            name="password"
            placeholder="••••••••"
          />
          <button
            className="facebook-login-button home-email-button"
            onClick={() => this.signIn()}
          >
            <i
              className="fa fa-send"
              style={{ fontSize: "22px" }}
              aria-hidden="true"
            />
            <span className="facebook-login-button__text">Sign in</span>
          </button>
        </Modal>
      </div>
    );
  }
}
