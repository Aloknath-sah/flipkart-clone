import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Product/reducer";
import { registerReducer } from "./Register/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    register: registerReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);