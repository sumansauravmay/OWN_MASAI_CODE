import {legacy_createStore,combineReducers,compose} from "redux";

import {counterReducer} from "./counter/counter.reducer";
import { themeReducer } from "./theme/theme.reducer";
import {todoReducer} from "./todos/todos.reducer";

const rootReducer=combineReducers({
    counterManager:counterReducer,
    todosManager:todoReducer,
    themeManager:themeReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

export const store=legacy_createStore(rootReducer,composeEnhancer());





