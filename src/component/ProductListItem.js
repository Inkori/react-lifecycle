import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProductListItem extends Component {
  render() {
    const { username, price, counter } = this.props;
    const result = (
      <div>
        <p>{username}</p>
        <p>{price}</p>
        <input onClick={counter} type="button" value="Add to Cart" />
      </div>
    );

    return result;
  }
}

ProductListItem.defaultProps = {
  username: "Jhon Doue",
  price: 0,
  counter: () => {
    console.log("click event");
  }
};
ProductListItem.propTypes = {
  username: PropTypes.string,
  price: PropTypes.number,
  counter: PropTypes.func
};
