import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <table className="table">
        {/* <thead>
      <tr>
        <th>Uno</th>
        <th>Dos</th>
        <th>Tres</th>
        <th>Quatro</th>
      </tr>
    </thead> */}
        <tbody>
          <tr>
            <td>What is drop shipping?</td>
            <td>
              <span className="badge badge--info">
                <i className="fas fa-check" />
              </span>
            </td>
          </tr>
          <tr>
            <td>Drop shipping &amp; e-commerce</td>
            <td>
              <span className="badge badge--info">
                <i className="fas fa-check" />
              </span>
            </td>
          </tr>
          <tr>
            <td>What shall I sell?</td>
            <td>
              <span className="badge badge--info">
                <i className="fas fa-check" />
              </span>
            </td>
          </tr>
          <tr>
            <td>How do I source products?</td>
            <td>
              <span className="badge badge--success">New</span>
            </td>
          </tr>
          <tr>
            <td>How do I find these manufacturers?</td>
            <td>
              <span className="badge badge--success">New</span>
            </td>
          </tr>
          <tr>
            <td>AliExpress (aka your personal gold mine)</td>
            <td>
              <span className="badge badge--success">New</span>
            </td>
          </tr>
          <tr>
            <td>🚨 WARNING 🚨</td>
            <td>
              <span className="badge badge--success">New</span>
            </td>
          </tr>
          <tr>
            <td>How does this make money?</td>
            <td>
              <span className="badge badge--success">New</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
