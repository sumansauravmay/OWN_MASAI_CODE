import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userreducer } from "./User/user.reducer";



// Note: you can delete the line below, but remember to create a new store variable

const rootReducer=combineReducers({
  authManager: userreducer
 

})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));