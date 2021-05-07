import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Widget from "./Widget";
import { BuyMentorship } from "../Payments";

class Mentorship extends Component {
  componentDidMount() {
    const { user } = this.props;
    this.props.checkPayment(user.uid);
  }

  render() {
    const {
      payment: { mentorship },
      uid
    } = this.props;
    const lock =
      mentorship !== true ? (
        mentorship === "pending approval" ? (
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
        <p>
          Take your e-commerce brand to the <strong>next level</strong> with a
          group mentorship!
        </p>
        <p>What you get:</p>
        <ul>
          <li>
            Learn directly from me with other dedicated students in an exclusive
            mastermind group
          </li>
          <li>
            I will personally answer your questions to ensure that your brand
            grows profitably
          </li>
          <li>
            I will do a weekly group-mentoring livestream where I will
            troubleshoot your stores and your ads
          </li>
          <li>Excusive access to professional ad creatives ($247+ value)</li>
          <li>
            Excusive premium Shopify themes ($300+ value <strong>each</strong>)
          </li>
        </ul>
        <p>
          These groups tend to cost $1,000-$3,000 &minus; I'm opening a few
          spots in my group mentorship for only $99/month on a{" "}
          <strong>trial basis</strong>. This price will definitely go up for
          future students in 2020 so lock yourself in at $99/month today.
        </p>
        <BuyMentorship purchased={mentorship} uid={uid} />
      </Widget>
    );
  }
}

Mentorship.defaultProps = {
  payment: {
    mentorship: false
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
)(Mentorship);
