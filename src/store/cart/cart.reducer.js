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
  console.log('Action reçue :', action);
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
    // case CART_ACTION_TYPES.ADD_ORDER:
    //       console.log('État précédent des commandes :', state.orders);
    //       console.log('Payload de la commande à ajouter :', action.payload);
    
    //       // S'assurer que state.orders est un tableau
    //       if (!Array.isArray(state.orders)) {
    //         console.error('Erreur : state.orders est indéfini ou n\'est pas un tableau');
    //       }
    //       const newState = {...state,
    //       recentOrder: action.payload,
    //       orders: [...state.orders, action.payload],}
    //       console.log('Après ajout:', newState.orders);
    //       return newState;

      case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        total: 0,
      };
    default:
      return state;
  }
};
