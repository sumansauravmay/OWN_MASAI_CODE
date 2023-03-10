import {legacy_createStore,compose,combineReducers,applyMiddleware }from "redux"

import thunk from "redux-thunk";
import Cartreducer from "../authenticate/Cart/Cartreducer";

import {productreducer} from "../authenticate/product.reducer";

const rootReducer=combineReducers({
    productManager:productreducer,
    cart:Cartreducer

})

const composer=window.__REDUX_DEVTOOPS_EXTENSION_COMPOSE__||compose


export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))


