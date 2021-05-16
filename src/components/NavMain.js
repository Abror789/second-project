import React,{useState} from 'react';
import {Link} from "react-router-dom";

const NavMain = () => {
    return (
       <div className="nav-main">
           <div className="container">
               <div className="row">
                   <nav className="navbar navbar-expand-sm ">

                       <a className="navbar-brand" href="#">
                           <div className="green">
                              <Link to="/"> <img src="./images/white-home.png" alt=""/></Link>
                           </div>
                       </a>

                       <ul className="navbar-nav">
                           <li className="nav-item"><a className="nav-link" href="#">Jamiyat haqida</a></li>
                           <li className="nav-item"><a className="nav-link" href="#">Struktura</a></li>
                           <li className="nav-item"><a className="nav-link" href="#">Yangiliklar</a></li>
                           <li className="nav-item"><a className="nav-link" href="#">Elektron murojaatlar</a></li>
                           <li className="nav-item"><a className="nav-link" href="#">Interaktiv xizmatlar</a></li>
                           <li className="nav-item"><a className="nav-link" href="#">Aloqa</a></li>
                       </ul>
                   </nav>
               </div>

           </div>
       </div>
    );
};

export default NavMain;