import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./Redux/reducers/rootReducer";


const store=createStore(rootReducer)



ReactDOM.render(
  <Provider store={store} >


      <App />



  </Provider>,
  document.getElementById('root')
);
// 97 727 83 03
// Mors
// yunsobod dehqon bozori;


