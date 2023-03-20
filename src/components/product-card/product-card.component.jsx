import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  ProductCardContainer,
  Name,
  Price,
  Footer,
} from "./product-card.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer ntainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name as="span">{name}</Name>
        <Price as="span">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
