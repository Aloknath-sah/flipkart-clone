import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
//import { registerReducer } from "./Register/reducer";
import { productReducer } from "./Product/reducer";
//import { loginReducer } from "./Login/reducer";

const rootReducer = combineReducers({
    product: productReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);