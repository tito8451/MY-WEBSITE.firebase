import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";

import { selectCurrentUser } from "../../store/user/user.selector.jsx";
import { selectIsCartOpen } from "../../store/cart/cart.selector.jsx";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "../../routes/navigation/navigation.styles.jsx";
import { signOutStart } from "../../store/user/user.action.jsx";

const Navigation = () => {
    // console.log("je me balade dans la navigation");
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
    // console.log(currentUser);
    // console.log("je me balade dans la navigation");

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
