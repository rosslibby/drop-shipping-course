import React, { Component } from "react"
import * as actions from "../../actions"
import { connect } from "react-redux"
import Widget from "./Widget"
import { BuyBlueprint } from "../Payments"

class Blueprint extends Component {
  componentDidMount() {
    const { user } = this.props
    this.props.checkPayment(user.uid)
  }

  render() {
    const {
      // payment: { course },
      uid
    } = this.props
    const course = true // giving course away for free
    const lock =
      course !== true ? (
        <div className="portal-module__lock">
          <i className="fa fa-lock" />
        </div>
      ) : null

    return (
      <Widget>
        {lock}
        <p>
          My blueprint teaches you how to build your very own e-commerce brand
          from the ground up!
        </p>
        <p>
          Learn to use the <em>exact</em> methods I utilize to grow multiple{" "}
          <strong>profitable</strong> 6-figure businesses.
        </p>
        <p>
          My blueprint is always up to date with the <strong>latest</strong>{" "}
          information for drop shipping &amp; e-commerce.
        </p>
        <BuyBlueprint uid={uid} purchased={course} />
      </Widget>
    )
  }
}

Blueprint.defaultProps = {
  payment: {
    course: false
  }
}

const mapStateToProps = ({ user, payment }) => {
  return {
    user,
    payment
  }
}

export default connect(
  mapStateToProps,
  actions
)(Blueprint)
