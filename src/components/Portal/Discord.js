import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Widget from "./Widget";
import { BuyDiscord } from "../Payments";

class Discord extends Component {
  componentDidMount() {
    const { user } = this.props;
    this.props.checkPayment(user.uid);
  }

  render() {
    const {
      payment: { discord },
      uid
    } = this.props;
    const lock =
      discord !== true ? (
        discord === "pending approval" ? (
          <div className="portal-module__lock">
            <i className="fas fa-hourglass-half" />
          </div>
        ) : (
          <div className="portal-module__lock">
            <i className="fa fa-lock" />
          </div>
        )
      ) : null;

    return (
      <Widget>
        {lock}
        <p>Join the Discord and talk with me directly!</p>
        <p>
          Discord is a voice and text chat platform ideal for sharing
          information in a semi-private group setting. Join my Discord server
          and have direct access to e-commerce tips and drop shipping tutorials,
          as well as getting your questions answered by me.
        </p>
        <p>
          My Discord server is the first of its kind for drop shipping and
          e-commerce.
        </p>
        <BuyDiscord uid={uid} purchased={discord} />
      </Widget>
    );
  }
}

Discord.defaultProps = {
  payment: {
    discord: false
  }
};

const mapStateToProps = ({ user, payment }) => {
  return {
    user,
    payment
  };
};

export default connect(
  mapStateToProps,
  actions
)(Discord);
