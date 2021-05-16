import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";



const Routing = () => {
    return (
       <BrowserRouter>
           {/*<FirstPage/>*/}
           {/*<FirstPage/>*/}

           <Switch>
               <Route path="/" exact component={FirstPage} />
               <Route path="/second" exact component={SecondPage}/>

           </Switch>
       </BrowserRouter>
    );
};

export default Routing;