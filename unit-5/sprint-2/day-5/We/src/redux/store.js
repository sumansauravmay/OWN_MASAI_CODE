import {legacy_createStore,combineReducers,
    compose,applyMiddleware} from "redux";
    import thunk from "redux-thunk";

import { postsReducer } from "./posts/posts.reducer";
import { feedsReducer } from "./feeds/feeds.reducer";
import { authReducer } from "./auth/auth.reducer";

const rootReducer=combineReducers({
postsManager:postsReducer,
feedsManager:feedsReducer,
authManager:authReducer,

})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const logger=(store)=>(next)=>(action)=>{
    if(typeof action ==="function")
    {
        action(store.dispatch).then(next);
    } else{
        next(action)
    }
    console.log(action)
}

export const store=legacy_createStore(rootReducer,
    composer(applyMiddleware(logger,thunk)))



