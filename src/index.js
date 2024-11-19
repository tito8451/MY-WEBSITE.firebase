import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";

const rootElement = document.getElementById("root");
const options = {
  // passing the client secret obtained from the server
  clientSecret: '{{CLIENT_SECRET}}',
};
render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise} options={options}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
