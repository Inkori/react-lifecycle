import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Layout.css";

export default class Layout extends Component {
  static defaultProps = {
    username: "Guest"
  };
  render() {
    return (
      <div>
        <header>Welcome, {this.props.username}!</header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
