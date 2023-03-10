// Note: Do not update/change the initial state
import { ADD_ITEM_TO_CART_ERROR, 
  ADD_ITEM_TO_CART_LOADING, 
  ADD_ITEM_TO_CART_SUCCESS, 
  GET_CART_ITEMS_LOADING,
   GET_CART_ITEMS_SUCCESS,
   GET_CART_ITEMS_ERROR,
   REMOVE_CART_ITEMS_LOADING,
   REMOVE_CART_ITEMS_SUCCESS,
   REMOVE_CART_ITEMS_ERROR
  } from "./cart.types";

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};


export const cartReducer = (state = cartInitalState,{type,payload}) => {
  switch(type){
    case ADD_ITEM_TO_CART_LOADING:{
      return {
        ...state,
        addCartItem: {
          loading: true,
          error: false,
        },
      }
    }

    case ADD_ITEM_TO_CART_ERROR:{
      return {
        ...state,
        addCartItem: {
          loading: false,
          error: true,
        },
      }
    }

    case ADD_ITEM_TO_CART_SUCCESS:{
      return {
        ...state,
        loading:false,
        data:payload
        
      }
    }
    case  GET_CART_ITEMS_LOADING:{
      return {
        ...state,
        getCartItems: {
          loading: true,
          error: false,
        },
      }
    }

    case  GET_CART_ITEMS_ERROR:{
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: true,
        },
      }
    }

    case GET_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        loading:false,
       data:payload
      }
    }

    case  REMOVE_CART_ITEMS_LOADING:{
      return {
        ...state,
        removeCartItem: {
          loading: true,
          error: false,
        },
      }
    }

    case  REMOVE_CART_ITEMS_ERROR:{
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: true,
        },
      }
    }

    case REMOVE_CART_ITEMS_SUCCESS:{
      return {
        ...state,
        loading:false,
       data:payload
      }
    }

    default:{
      return state;
    }
  }
 
};
