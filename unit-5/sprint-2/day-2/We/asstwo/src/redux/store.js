import {legacy_createStore} from "redux";

import {counterReducer} from "./reducer.js";

export const store=legacy_createStore(counterReducer);