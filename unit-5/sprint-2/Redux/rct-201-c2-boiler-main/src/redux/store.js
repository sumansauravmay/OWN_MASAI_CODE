// TODO: use this store variable to create a store.

// Note: you can delete the line below, but remember to create a new store variable
import {legacy_createStore,compose,combineReducers,applyMiddleware }from "redux"
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import thunk from "redux-thunk"
const rootreducer=combineReducers({auth:authReducer,
cart:cartReducer,
products:productReducer})
const composer=window.__REDUX_DEVTOOPS_EXTENSION_COMPOSE__||compose
export const store = legacy_createStore(rootreducer,composer(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
