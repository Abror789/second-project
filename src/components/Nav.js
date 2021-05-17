import React,{useState} from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav1">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-between align-items-center">

                         <h3 className="mb-0">Dustlikdon.uz</h3>

                            <div className="input-group">
                                <div className="input-group-append">
                                    <button className="btn" type="submit"><img src="./images/search.png" alt=""/></button>
                                </div>
                                <input type="text" placeholder="Saytdan izlash" className="form-control"/>
                            </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center ">

                       <div className="inputs">
                           <select className="form-control" >
                               <option>O'zbekcha</option>
                               <option>Русский</option>

                           </select>
                       </div>


                            <button className="btn btn1 d-flex align-items-center justify-content-start">
                                <img src="./images/phone.png" alt=""/>
                                <p className="mb-0">99872 335-41-16</p>
                            </button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;