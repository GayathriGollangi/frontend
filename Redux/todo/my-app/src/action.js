import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "./actionType";

// LOADING 
export const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};
//FETCHING DATA
export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload: payload };
};
// FAILURE 
export const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};

// post
// post loading 
export const postRequestAction = () => {
  return { type: TODO_REQUEST };
};

// post success 
export const postSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload: payload };
};
//post failure
export const postFailureAction = () => {
  return { type: TODO_FAILURE };
};
