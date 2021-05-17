import"./sass/main.scss"
import {ToastContainer} from "react-toastify";
import {BrowserRouter ,Switch, Route} from "react-router-dom";
import React from 'react';
import Nav from "./components/Nav";
import NavMain from "./components/NavMain";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Login from "./components/Login";

const App = () => {
  return (
      <BrowserRouter>
          <Nav/>
          <NavMain/>
          <Switch>
              <Route path="/" exact component={FirstPage}/>
              <Route path="/second" exact component={SecondPage}/>
              <Route path="/login" exact component={Login}/>
          </Switch>
          <Footer/>




        <ToastContainer/>
      </BrowserRouter>
  );
};

export default App;
