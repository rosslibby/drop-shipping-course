import React from "react";
import { users } from "../firebaseConfig";

const purchase = uid => {
  console.log(uid);

  const product = "sku_GHy1RVKIf0EVHP";

  /**
   * Update user to appropriate action
   */
  users.child(uid).update({
    course: `${uid}__${product}`
  });

  window.stripe
    .redirectToCheckout({
      items: [
        {
          sku: product,
          quantity: 1
        }
      ],
      successUrl: `${window.location.protocol}//${
        window.location.host
      }/portal?p=${product}`,
      cancelUrl: `${window.location.protocol}//${window.location.host}/`
    })
    .then(res => {
      if (res.error) {
        const displayError = document.getElementById("error-message");
        displayError.textContent = res.error.message;
      }
    });
};

const discord = uid => {
  const product = "plan_GHxFXKfA4wX0td";

  /**
   * Update user to appropriate action
   */
  users.child(uid).update({
    discord: `${uid}__${product}`
  });

  window.stripe
    .redirectToCheckout({
      items: [
        {
          plan: product,
          quantity: 1
        }
      ],
      successUrl: `${window.location.protocol}//${
        window.location.host
      }/portal?p=${product}`,
      cancelUrl: `${window.location.protocol}//${window.location.host}/`
    })
    .then(res => {
      if (res.error) {
        const displayError = document.getElementById("error-message");
        displayError.textContent = res.error.message;
      }
    });
};

const mentorship = uid => {
  const product = "plan_GHxD9oFSyjqATI";

  /**
   * Update user to appropriate action
   */
  users.child(uid).update({
    mentorship: `${uid}__${product}`
  });

  window.stripe
    .redirectToCheckout({
      items: [
        {
          plan: product,
          quantity: 1
        }
      ],
      successUrl: `${window.location.protocol}//${
        window.location.host
      }/portal?p=${product}`,
      cancelUrl: `${window.location.protocol}//${window.location.host}/`
    })
    .then(res => {
      if (res.error) {
        const displayError = document.getElementById("error-message");
        displayError.textContent = res.error.message;
      }
    });
};

const StripePayment = ({ uid }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#6772E5",
          color: "#FFF",
          padding: "20px 40px",
          border: 0,
          borderRadius: "4px",
          fontSize: "2em",
          fontWeight: "bold"
        }}
        onClick={() => purchase(uid)}
      >
        <span className="facebook-login-button__text">
          Buy the blueprint ($99)
        </span>
      </button>
      <button
        style={{
          backgroundColor: "#6772E5",
          color: "#FFF",
          padding: "20px 40px",
          border: 0,
          borderRadius: "4px",
          fontSize: "2em",
          fontWeight: "bold"
        }}
        onClick={() => mentorship(uid)}
      >
        <span className="facebook-login-button__text">
          Join the mastermind ($99/mo)
        </span>
      </button>
      <button
        style={{
          backgroundColor: "#6772E5",
          color: "#FFF",
          padding: "20px 40px",
          border: 0,
          borderRadius: "4px",
          fontSize: "2em",
          fontWeight: "bold"
        }}
        onClick={() => discord(uid)}
      >
        <span className="facebook-login-button__text">
          Join the Discord ($20/mo)
        </span>
      </button>
      <a href="./portal">Just go to the portal</a>
      <div id="error-message" />
    </div>
  );
};

export default StripePayment;
