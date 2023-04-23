import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectISCartOpen,
} from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectISCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
