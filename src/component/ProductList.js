import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  state = {
    prodlist: [
      {
        id: "1",
        name: "Phone",
        price: 300
      },
      {
        id: "2",
        name: "laptop",
        price: 700
      },
      {
        id: "3",
        name: "headset",
        price: 5
      }
    ],
    productsCount: 0
  };
  updateCount = () => {
    this.setState(state => ({
      productsCount: ++state.productsCount
    }));
  };

  render() {
    let list = (
      <div>
        <div>
          {this.state.prodlist.map((data, id) => {
            return (
              <div key={id}>
                <ProductListItem {...data} counter={this.updateCount} />
              </div>
            );
          })}
        </div>
        <div>
          <h3>Chart: {this.state.productsCount}</h3>
        </div>
      </div>
    );
    return list;
  }
}
