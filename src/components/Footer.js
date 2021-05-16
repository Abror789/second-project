import React,{useState} from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5 className="mb-0">Dustlikdon.uz</h5>
                        <p className="jizzax">Jizzax viloyati Do‘stlik tumani
                            Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                    </div>
                    <div className="col-2">
                        <h6>Asosiy</h6>
                        <a className="d-block" href="#">Jamiyat haqida</a>
                        <a className="d-block" href="#">Struktura</a>
                        <a className="d-block" href="#">Yangiliklar</a>
                    </div>
                    <div className="col-3">
                        <h6>Xizmatlar</h6>
                        <a className="d-block" href="#">Elektron murojaatlar</a>
                        <a className="d-block" href="#">Interaktiv xizmatlar</a>
                        <a className="d-block" href="#">Saytdan izlash</a>
                    </div>
                    <div className="col-3">
                        <h6>Bog'lanish</h6>
                        <div  className="d-flex justify-content-start align-items-center">
                            <img src="./images/phone2.png" alt=""/>
                            <p className="mb-0 info1">998 71 335 41 16</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <img src="./images/email.png" alt=""/>
                            <p className="mb-0 info1">info@dustlikdon.uz</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;