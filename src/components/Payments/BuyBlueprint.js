import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { users } from "../../firebaseConfig"
import Modal from "../Modal"

class BuyBlueprint extends Component {
  constructor() {
    super()

    this.state = {
      modal: false
    }
  }

  purchase(uid) {
    const product = "sku_GGSXuTEZiAqi0k"

    /**
     * Update user to appropriate action
     */
    users.child(uid).update({
      course: `${uid}__${product}`
    })

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
        cancelUrl: `${window.location.protocol}//${window.location.host}/portal`
      })
      .then(res => {
        if (res.error) {
          const displayError = document.getElementById("error-message")
          displayError.textContent = res.error.message
        }
      })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    // const { purchased, uid } = this.props
    const { uid } = this.props
    const purchased = true
    const { modal } = this.state
    return purchased === true ? (
      <div>
        <button
          className="portal__button"
          onClick={() => {
            window.location.pathname = "/guide"
          }}
        >
          Access the Blueprint
        </button>
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
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="8HBHFJTX9HUL6"
                />
                <button
                  type="submit"
                  className="portal__button portal__button--paypal"
                  alt="PayPal - The safer, easier way to pay online!"
                  name="submit"
                >
                  <span>
                    <i className="fab fa-paypal" />
                  </span>
                  <span style={{ paddingLeft: "8px" }}>Pay</span>
                  <span>Pal</span>
                </button>
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </Col>
          </Row>
        </Modal>
        <button className="portal__button" onClick={() => this.toggleModal()}>
          Buy the blueprint ($99)
        </button>
        <div id="error-message" />
      </div>
    )
  }
}

export default BuyBlueprint
