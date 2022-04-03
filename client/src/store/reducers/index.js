import { combineReducers } from "redux"
import loading from "./loading";
import operations from './operations'

const reducer = combineReducers({ operations, loading });

export default reducer;