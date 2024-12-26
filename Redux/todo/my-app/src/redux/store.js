import { reducerFunction } from "./reducer";
import { legacy_createStore } from "redux";

 const initialState = {
    todo: [],
    isLoading: false,
    isError: false,
  
}

export const store = legacy_createStore(reducerFunction,initialState);