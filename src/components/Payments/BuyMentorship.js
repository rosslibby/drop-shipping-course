import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { users } from "../../firebaseConfig"
import Modal from "../Modal"

class BuyMentorship extends Component {
  constructor() {
    super()

    this.state = {
      modal: false
    }
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  purchase(uid) {
    const product = "plan_GMRGbPGrXCyegK"

    /**
     * Update user to appropriate action
     */
    users.child(uid).update({
      mentorship: `${uid}__${product}`
    })

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
        cancelUrl: `${window.location.protocol}//${window.location.host}/portal`
      })
      .then(res => {
        if (res.error) {
          const displayError = document.getElementById("error-message")
          displayError.textContent = res.error.message
        }
      })
  }

  render() {
    const { purchased, uid } = this.props
    const { modal } = this.state
    return purchased === true ? (
      <div>
        <a href="#" className="portal__button">
          Access the Mastermind
        </a>
      </div>
    ) : purchased === "pending approval" ? (
      <div>
        <button className="portal__button portal__button--disabled">
          Pending approval
        </button>
      </div>
    ) : (
      <div>
        <Modal visible={modal} toggle={this.toggleModal.bind(this)}>
          <Row>
            <Col>
              <button
                className="portal__button"
                onClick={() => this.purchase(uid)}
              >
                Pay with Credit or Debit
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ display: "flex", justifyContent: "center" }}>
                or
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <form
                onSubmit={() => this.purchase(uid)}
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                {" "}
                <input type="hidden" name="cmd" value="_s-xclick" />{" "}
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="4GS2VMAVVDFYS"
                />{" "}
                <button
                  type="submit"
                  className="portal__button portal__button--paypal"
                  alt="PayPal - The safer, easier way to pay online!"
                  name="submit"
                >
                  {" "}
                  <span>
                    {" "}
                    <i className="fab fa-paypal" />{" "}
                  </span>{" "}
                  <span style={{ paddingLeft: "8px" }}>Pay</span>{" "}
                  <span>Pal</span>{" "}
                </button>{" "}
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />{" "}
              </form>
            </Col>
          </Row>
        </Modal>
        <button className="portal__button" onClick={() => this.toggleModal()}>
          Join the Mentorship ($297/mo)
        </button>
        <div id="error-message" />
      </div>
    )
  }
}

export default BuyMentorship
