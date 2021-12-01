import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import singleSpaReact from "single-spa-react";

const products = {
  718: { name: "Porsche 718", img: "718.png" },
  911: { name: "Porsche 911", img: "911.png" },
  taycan: { name: "Porsche Taycan", img: "taycan.png" }
};

const App = () => (
  <Router>
    <Route path="/product/:sku" component={Product} />
  </Router>
);

const Product = ({ match }) => {
  const { name, img } = products[match.params.sku];
  return (
    <div>
      <Link to="/">&lt; home</Link>
      &nbsp;-&nbsp;
      <Link to="/checkout/cart">view cart &gt;</Link>
      <h1>{name}</h1>
      <img src={`http://localhost:3004/imgs/${img}`} width="200" />
    </div>
  );
};

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("app-decide")
});

export const { bootstrap, mount, unmount } = reactLifecycles;
