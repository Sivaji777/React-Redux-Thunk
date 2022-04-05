import { applyMiddleware, createStore } from "redux";
import { ReducerApi } from "./ReducerApi";
import Thunk from 'redux-thunk'

export const Data =createStore(ReducerApi, applyMiddleware(Thunk))