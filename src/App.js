import React, { Component } from "react";
import Layout from "./component/Layout";
import ProductList from "./component/ProductList";
import PropTypes from "prop-types";

const user = {
  username: "Roman"
};
const content = {
  text: "asdasdasdasdasdda"
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout username={user.username}>
          <ProductList />
        </Layout>
      </div>
    );
  }
}

export default App;
