import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { clearCart, addOrder } from "../../store/cart/cart.action.js"; // Importez les actions/store/cart/cart.actions";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  const handlePaymentSuccess = (items, total) => {
    console.log("items", items);
    console.log("total", total);
    const orderDetails = {
      items,
      total,
      date: new Date().toISOString(), // Enregistre la date et l'heure de la commande
    };

    dispatch(addOrder(orderDetails)); // Ajouter l'ordre à l'historique
    dispatch(clearCart()); // Vider le panier
    navigate('/checkout-validation');
  };
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
      <Total>Total: ${cartTotal}</Total>

      <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
    </CheckoutContainer>
  );
};

export default Checkout;
