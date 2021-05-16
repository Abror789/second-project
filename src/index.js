import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
// import CounterRedux from "./components/CounterRedux";
import Routing from "./components/Routing";


const store=createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
      {/*<ToastContainer/>*/}
      <Routing/>
      {/*<CounterRedux/>*/}

  </Provider>,
  document.getElementById('root')
);


