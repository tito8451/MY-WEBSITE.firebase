import React from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Elements } from "@stripe/react-stripe-js";

import App from "/src/App";

import { stripePromise } from "/src/utils/stripe/stripe.utils.jsx";

import { persistor, store } from "/src/store/store";

// import { Elements as StripeElements } from  "/src/components/payment-form/payment-form.component.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
