import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//? import de mes routes

import Home from "./routes/home/home.component"; // import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentification from "./routes/authentification/authentification.component";
import Checkout from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";

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
