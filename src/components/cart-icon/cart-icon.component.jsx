import { useDispatch, useSelector } from "react-redux";

// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

import { setIsCartOpen } from "/src/store/cart/cart.action.jsx";
import {
  selectCartCount,
  selectIsCartOpen,
} from "/src/store/cart/cart.selector.jsx";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
