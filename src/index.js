import React from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";

import App from "./App";

import { stripePromise } from "./utils/stripe/stripe.utils";

import { store } from "./store/store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Router>
    </Provider>
  </React.StrictMode>
);
