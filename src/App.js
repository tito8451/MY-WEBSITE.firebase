import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/checkout.component';
import CheckoutValidationPayment from './routes/checkout/checkoutValidationPayment';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path="checkout-validation" element={<CheckoutValidationPayment />} />
      </Route>
    </Routes>
  );
};

export default App;
