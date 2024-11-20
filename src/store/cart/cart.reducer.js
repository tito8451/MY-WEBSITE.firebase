import { CART_ACTION_TYPES } from './cart.types';

export const CART_INITIAL_STATE = {
  isCartOpen: false , 
  cartItems: [],
  total: 0, 
  orders: [],
  recentOrder: null,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
      case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        total: 0,
      };
      case CART_ACTION_TYPES.ADD_ORDER: // Ajoutez ce cas pour gérer les commandes
      console.log('Current orders:', state.orders);
      console.log('Incoming order payload:', payload);
      return {
        ...state,
        recentOrder: payload, // Enregistre la dernière commande
        orders: [...state.orders, payload], // Ajoute l'ordre à l'historique
      };

    
    default:
      return state;
  }
};
