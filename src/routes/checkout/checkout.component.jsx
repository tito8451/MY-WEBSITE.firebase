import { useSelector } from "react-redux";
import PaymentForm from "../../components/payment-form/payment-form.component.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "../../routes/checkout/checkout.styles.jsx";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total TTC: {cartTotal} €</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
