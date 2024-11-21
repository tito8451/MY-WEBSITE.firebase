import { useSelector} from "react-redux";
// import { useNavigate , useDispatch  } from 'react-router-dom';
// import { useEffect } from "react"; // Assurez-vous d'importer useEffect
// import { clearCart, addOrder } from "../../store/cart/cart.action.js"; 
import {
  selectCartItems,
  selectCartTotal,
  // selectOrders // Assurez-vous que ce sélecteur retourne les commandes
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
  // const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  // const orders = useSelector(selectOrders); // Utilisez useSelector pour accéder aux ordres

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('Orders après dispatch:', orders); // Vérifiez l'état des commandes ici
  // }, [orders]); // Surveillez les changements

  // const handlePaymentSuccess = (items, total) => {
  //   console.log("items", items);
  //   console.log("total", total);
  //   const orderDetails = {
  //     items,
  //     total,
  //     date: new Date().toISOString(), // Enregistre la date et l'heure de la commande
  //   };

  //   dispatch(addOrder(orderDetails)); // Ajouter l'ordre à l'historique
  //   dispatch(clearCart()); // Vider le panier
  //   navigate('/checkout-validation'); // Rediriger vers la page de validation
  // };

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

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
