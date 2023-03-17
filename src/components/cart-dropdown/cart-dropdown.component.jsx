import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigation = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCkechoutHandler = () => {
    navigation("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCkechoutHandler}>GO TO CHECK OUT</Button>
    </div>
  );
};
export default CartDropdown;
