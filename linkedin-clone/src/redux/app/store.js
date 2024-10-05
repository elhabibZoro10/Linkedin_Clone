import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { thunk as reduxThunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
