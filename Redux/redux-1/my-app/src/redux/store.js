import { legacy_createStore as createStore } from 'redux'
import {reducerFunction} from "./reducer"

const initialState = {
    count:0,
    todo:[],
    cart:[],
}

export const store = createStore(reducerFunction,initialState);

