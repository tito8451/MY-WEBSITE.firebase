import { Routes, Route } from "react-router-dom";

//? import de mes routes

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Shop from "./routes/shop/Shop.component";
import Authentification from "./routes/authentification/authentification.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentification />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
