import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import epacket from "../epacket";

export default class Resources extends Component {
  constructor() {
    super();

    this.state = {
      storeEmail: "hello@yourstore.com",
      customerServiceName: "Name",
      discountCode: "Test",
      discountAmount: "0%",
      checkoutEmail: ""
    };
  }

  generateEmail() {
    const {
      storeEmail,
      discountCode,
      discountAmount,
      customerServiceName
    } = this.state;

    const checkoutEmail = `
        {% capture email_title %}{% if item_count == 1 %}You left an
        item in your cart{% else %}You left items in your cart{% endif
        %}{% endcapture %}{% capture email_body %}{% if
        billing_address.first_name %}<p>Hey {
        { billing_address.first_name }},</p><p>${customerServiceName}
        here from Your Store. Real human, not a robot 🙂</p><p>Just
        thought I'd reach out and give you a discount code. Seems like maybe the
        items in your cart cost a little more than you had hoped. Use code
        <code>${discountCode}</code> to save ${discountAmount} on that
        cart!</p><p>We're all here 24/7, so reach out if you need
        anything.</p><p>${customerServiceName}</p><p><a
        href="mailto:${storeEmail}">${storeEmail}</a></p>{% else
        %}<p>Hey there,</p><p>${customerServiceName} here from Your
        Store. Real human, not a robot 🙂</p><p>Just thought I'd reach out
        and give you a discount code. Seems like maybe the items in your cart
        cost a little more than you had hoped. Use code <code>${discountCode}
        </code> to save ${discountAmount} on that cart!</p><p>We're all
        here 24/7, so reach out if you need anything.</p><p>
        ${customerServiceName}</p><p><a href="mailto:${storeEmail}">
        ${storeEmail}</a></p>{% endif %}{% endcapture
        %}<!DOCTYPE html><html lang="en"><head><title>{
        { email_title }}</title><meta http-equiv="Content-Type"
        content="text/html; charset=utf-8"><meta name="viewport"
        content="width=device-width"><link rel="stylesheet" type="text/css"
        href="/assets/notifications/styles.css"><style>.button__cell {
        background: {
        { shop.email_accent_color }}; }a, a:hover, a:active, a:visited {
        color: {
        { shop.email_accent_color }};
        }</style></head><body><table
        class="body"><tr><td><table class="header row"><tr><td
        class="header__cell"><center><table
        class="container"><tr><td><table class="row"><tr><td
        class="shop-name__cell">{%- if shop.email_logo_url %}<img src="
        {
        {shop.email_logo_url}}" alt="{
        { shop.name }}" width="{
        { shop.email_logo_width }}">{%- else %}<h1
        class="shop-name__text"><a href="{
        {shop.url}}">{
        { shop.name }}</a></h1>{%- endif
        %}</td></tr></table></td></tr></table></center></td></tr></table><table
        class="row content"><tr><td
        class="content__cell"><center><table
        class="container"><tr><td><h2>{
        { email_title }}</h2>{% if custom_message != blank %}<p>
        {
        { custom_message }}</p>{% else %}<p>{
        { email_body }}</p>{% endif %}<table class="row
        actions"><tr><td class="actions__cell"><table class="button
        main-action-cell"><tr><td class="button__cell"><a href="{
        { url }}" class="button__text">View your cart
        &rarr;</a></td></tr></table>{% if shop.url %}<table
        class="link secondary-action-cell"><tr><td class="link__cell">or
        <a href="{
        { shop.url }}">Visit our store</a></td></tr></table>
        {% endif
        %}</td></tr></table></td></tr></table></center></td></tr></table><table
        class="row section"><tr><td
        class="section__cell"><center><table
        class="container"><tr><td><h3>Complete your
        purchase</h3></td></tr></table><table
        class="container"><tr><td><table class="row">{% for line in
        subtotal_line_items %}<tr class="order-list__item"><td
        class="order-list__item__cell"><table><td>{% if line.image
        %}<img src="{
        { line | img_url: 'compact_cropped' }}" align="left" width="60"
        height="60" class="order-list__product-image"/>{% endif
        %}</td><td class="order-list__product-description-cell">{% if
        line.product.title %}{% assign line_title = line.product.title %}
        {% else %}{% assign line_title = line.title %}{% endif %}
        {% if line.quantity < line.quantity %}{% capture line_display
        %} {
        { line.quantity }} of {
        { line.quantity }} {% endcapture %}{% else %}{% assign
        line_display = line.quantity %}{% endif %}<span
        class="order-list__item-title">{
        { line_title }} × {
        { line_display }}</span><br/>{% if line.variant.title !=
        'Default Title' %}<span class="order-list__item-variant">{
        { line.variant.title }}</span><br/>{% endif %}{% if
        line.refunded_quantity > 0 %}<span
        class="order-list__item-refunded">Refunded</span>{% endif
        %}</td></table></td></tr>{% endfor
        %}</table></td></tr></table></center></td></tr></table><table
        class="row footer"><tr><td
        class="footer__cell"><center><table
        class="container"><tr><td><p class="disclaimer__subtext">Don't
        want to receive cart reminders from us? <a href="{
        { unsubscribe_url
        }}">Unsubscribe</a></p></td></tr></table></center></td></tr></table><img
        src="{
        { 'notifications/spacer.png' | shopify_asset_url }}" class="spacer"
        height="1" /></td></tr></table></body></html>`;

    this.setState({
      checkoutEmail
    });
  }

  render() {
    const { checkoutEmail } = this.state;
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Epacket Countries</Card.Title>
                <Card.Text>
                  <ul>
                    {epacket.map((country, i) => (
                      <li key={i}>{country}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Abandoned Checkout Recovery Email</Card.Title>
                <Card.Text>
                  <p>Abandoned Checkout Recovery Email</p>

                  <p>
                    You will 100% want to put this in your store! Shopify's
                    default abandoned checkout recovery email is BORING.
                  </p>

                  <p>
                    I have everything below. Make SURE that you replace "Ross"
                    with your own name (or a fake name), replace "Your Store"
                    with your store's name, and replace "yourstore.com" with
                    your domain name. Also, make sure that your discount code
                    exists! I used "SAVE15", but you can use whatever you want;
                    just make sure to update it if you use something different.
                  </p>

                  <p>Here's my subject line:</p>
                  <p>COMPLETE YOUR PURCHASE (AND SAVE 15%)</p>

                  <p>Here's the code:</p>
                  <p>
                    Enter your information below to get your custom email
                    template:
                  </p>
                  <section>
                    <label>Store email</label>
                    <input
                      type="email"
                      name="store-email"
                      onChange={e => {
                        this.setState({
                          storeEmail: e.target.value
                        });
                      }}
                    />
                  </section>
                  <section>
                    <label>Customer service name</label>
                    <input
                      type="text"
                      name="customer-service-name"
                      onChange={e => {
                        this.setState({
                          customerServiceName: e.target.value
                        });
                      }}
                    />
                  </section>
                  <section>
                    <label>Discount code</label>
                    <input
                      type="text"
                      name="discount-code"
                      onChange={e => {
                        this.setState({
                          discountCode: e.target.value
                        });
                      }}
                    />
                  </section>
                  <section>
                    <label>Discount amount</label>
                    <input
                      type="text"
                      name="discount-amount"
                      onChange={e => {
                        this.setState({
                          discountAmount: e.target.value
                        });
                      }}
                    />
                  </section>
                  <section>
                    <button onClick={() => this.generateEmail()}>
                      Generate your checkout recovery email template
                    </button>
                  </section>
                  <section>
                    <code>{checkoutEmail}</code>
                  </section>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}
