import {legacy_createStore} from 'redux'
import {reducerFunction} from "./reducer"

const initialState = {
    count:0,
    todo:[],
    cart:[],
}

export const store = legacy_createStore(reducerFunction,initialState);

