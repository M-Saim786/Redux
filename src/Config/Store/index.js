// Yahan thunk k zariye Reducer and Action ko milaen gy
import thunk from "redux-thunk";
import Reducer from './Reducer/index'
import { applyMiddleware, createStore } from "redux";
const store =createStore(Reducer ,applyMiddleware(thunk))
export default store