import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'


const reducer = combineReducers({

});

const initialState = {}

const middleware = [thunk];

const store = configureStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)