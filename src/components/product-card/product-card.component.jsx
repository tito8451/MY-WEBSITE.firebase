import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector.jsx";
import { addItemToCart } from "../../store/cart/cart.action.jsx";

import {
  ProductCartContainer,
  Name,
  Price,
  Footer,
} from "../../components/product-card/product-card.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name as="span">{name}</Name>
        <Price as="span">{price} €</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
