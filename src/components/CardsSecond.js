import React,{useState} from 'react';

const CardsSecond = () => {
    return (
        <div className="cards">
            <div className="container">

                    <div className="row row-1">
                        <div className="col-12 d-flex justify-content-between align-items-center">

                            <div> <h2 className="mb-0">Yangiliklar</h2></div>
                            <div className="d-flex justify-content-start align-items-center">
                                <img className="mr-3" src="./images/arrow-left.png" alt=""/>
                                <img src="./images/arrow-right.png" alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className="row row-2">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <img   src="./images/don.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <div className="info d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/date.png" alt=""/>
                                            <p className="mb-0">16:48 / 12.11.20</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/eye.png" alt=""/>
                                            <p className="mb-0">321</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/massage.png" alt=""/>
                                            <p className="mb-0">100</p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3>E'LON!!!</h3>
                                        <p>"DO`STLIKDONMAXSULOTLARI" AJ ning
                                            aksiyadorlari diqqatiga! 2020-yil 27-mart
                                            kuni soat 9:00 dan...</p>
                                        <button type="button" className="btn btn-outline-secondary">Batafsil</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <img   src="./images/xisobot.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <div className="info d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/date.png" alt=""/>
                                            <p className="mb-0">16:48 / 12.11.20</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/eye.png" alt=""/>
                                            <p className="mb-0">321</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/massage.png" alt=""/>
                                            <p className="mb-0">100</p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3>Xisobot: Buxgalteriya balansi
                                            2 kvartal</h3>
                                        <p style={{marginBottom:"40px"}}>Buxgalteriya balansi 2 kvartal bo’yicha
                                            foto jamlanma.</p>
                                        <button type="button" className="btn btn-outline-secondary">Batafsil</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <img   src="./images/girls.png" alt=""/>
                                </div>
                                <div className="card-body">
                                    <div className="info d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/date.png" alt=""/>
                                            <p className="mb-0">16:48 / 12.11.20</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/eye.png" alt=""/>
                                            <p className="mb-0">321</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <img src="./images/massage.png" alt=""/>
                                            <p className="mb-0">100</p>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h3>"DO`STLIKDONMAXSULOTLARI" AJ
                                            boshqaruv raisi...</h3>
                                        <p>"DO`STLIKDONMAXSULOTLARI" AJ ning
                                            boshqaruv raisi tomonidan Do’stlik
                                            tumanidagi 2-sonli...</p>
                                        <button type="button" className="btn btn-outline-secondary">Batafsil</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default CardsSecond;