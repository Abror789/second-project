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
import AdminMenus from "./components/AdminMenus";
import AdminNews from "./components/AdminNews";

const App = () => {

  return (
      <BrowserRouter>
          {window.location.href.includes("/admin") ? "" :
              <Nav/>

          }
          {window.location.href.includes("/admin") ? "" :

              <NavMain/>
          }

          <Switch>
              <Route path="/" exact component={FirstPage}/>
              <Route path="/second" exact component={SecondPage}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/admin/menus" component={AdminMenus}/>
              <Route path="/admin/news" component={AdminNews}/>
          </Switch>

          {window.location.href.includes("/admin") ? "" :

              <Footer/>
          }





        <ToastContainer/>
      </BrowserRouter>
  );
};

export default App;
