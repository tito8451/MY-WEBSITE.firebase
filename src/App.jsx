import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//? import de mes routes

import Home from "/src/routes/home/Home.component.jsx";
import Navigation from "/src/routes/navigation/navigation.component.jsx"; // "/src/routes/navigation/navigation.component.jsx";
import Shop from "/src/routes/shop/shop.component.jsx";
import Authentification from "/src/routes/authentification/authentification.component.jsx";
import Checkout from "/src/routes/checkout/checkout.component.jsx";

import { checkUserSession } from "./store/user/user.action.jsx";

const App = () => {
  const dispatch = useDispatch(checkUserSession());

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
