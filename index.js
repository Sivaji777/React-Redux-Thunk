import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';

// import { applyMiddleware, createStore } from "redux";
// import Thunk from 'redux-thunk'
// import { ReducerApi } from './components/Redux-Thunk/ReducerApi';
//  const data =createStore(ReducerApi, applyMiddleware(Thunk))
import {Data} from './components/Redux-Thunk/StoreApi'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={Data} >
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
