import {legacy_createStore} from 'react-redux'

const initialState = {
    count:0,
}

const store = legacy_createStore(reducerFunction,initialState);

export default store