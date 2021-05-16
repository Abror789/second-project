import React from 'react';
import Nav from "./Nav";
import NavMain from "./NavMain";
import Header from "./Header";
import Cards from "./Cards";
import Tabs from "./Tabs";
import Partners from "./Partners";
import Footer from "./Footer";

const FirstPage = () => {
    return (
        <div>
            <Nav/>
            <NavMain/>
            <Header/>
            <Cards/>
            <Tabs/>
            <Partners/>
            <Footer/>

        </div>
    );
};

export default FirstPage;