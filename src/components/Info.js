import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="top d-flex justify-content-start align-items-center">
                                    <div><Link><h6 className="mb-0">Jamiyat</h6></Link></div>
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
                                        <p className="mb-0 ">100</p>
                                    </div>
                                </div>
                                <div className="text-one">
                                    <h3 className="mb-0">Eksport qiluvchi tadbirkorlik subektlariga!!!</h3>
                                    <p className="mb-0">“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari
                                        tomonidan istisno tariqasida maxalliy tadbirkorlik sub'ektlariga eksport qilish
                                        sharti bilan birja savdolari orqali bug’doy sotilmoqda.
                                        Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan
                                        qiymat solig’isiz 1 610 000 so‘mdan, qo‘shilgan qiymat solig’ini xisobga olgan
                                        xolda 1 932 000 so‘mdan sotiladi.
                                        Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini
                                        qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha summasi
                                        Adliya vazirligi tomonidan 2016 yil 7 aprelda 2775-son bilan ro‘yxatga olingan
                                        Nizomga asosan qaytarib beriladi.</p>
                                </div>
                                <div className="line"></div>
                                <div className="theme d-flex justify-content-between align-items-center">
                                    <h3>Mavzuga izohlar</h3>
                                    <h4>2ta fikr</h4>
                                </div>
                                <div className="massage">
                                    <div className="massage-first d-flex justify-content-start ">
                                        <img src="./images/no-people.png" alt=""/>
                                      <textarea className="form-control "
                                                                        placeholder="Izoh qoldirishingiz mumkin">
                                        </textarea>
                                    </div>
                                    <div className="massage-second d-flex justify-content-start align-items-center">
                                        <div><img src="./images/nigina.png" alt=""/></div>
                                        <div className="nigina-info">
                                            <h5 className="mb-0">Nigina Karimova</h5>
                                            <h6 className="mb-0">Tushunmovchilik bo’yicha qayerga murojaat qilsam
                                                bo’ladi?</h6>
                                            <div className="d-flex justify-content-between align-items-center end-info">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img src="./images/heart.png" alt=""/>
                                                    <p className="mb-0">Javob qaytarish</p>
                                                </div>
                                               <div> <h6 className="mb-0 time">15 daqiqa avval</h6></div>
                                            </div>

                                        </div>


                                    </div>
                                    <div className="massage-second d-flex justify-content-start align-items-center">
                                        <div><img src="./images/sahar.png" alt=""/></div>
                                        <div className="nigina-info">
                                            <h5 className="mb-0">Sahar Kenjayev</h5>
                                            <h6 className="mb-0 font-weight-bold">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan
                                                qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan
                                                qiymat soligining ortiqcha batafsil</h6>
                                            <div className="d-flex justify-content-between align-items-center end-info">
                                                <div className="d-flex justify-content-start align-items-center">
                                                    <img src="./images/full-heart.png" alt=""/>
                                                    <p className="mb-0">Javob qaytarish</p>
                                                </div>
                                                <div> <h6 className="mb-0 time">15 daqiqa avval</h6></div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 >Media</h4>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src="./images/date.png" alt=""/>
                                        <p className="mb-0">16:48 / 12.11.20</p>
                                    </div>
                                    <div>
                                        <Link>Fotogalariya</Link>
                                    </div>
                                </div>
                                <h3 className="mb-0">"DO`STLIKDONMAXSULOTLARI"
                                    AJ boshqaruv raisi...</h3>
                                <div className="line"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src="./images/date.png" alt=""/>
                                        <p className="mb-0">16:48 / 12.11.20</p>
                                    </div>
                                    <div>
                                        <Link>Fotogalariya</Link>
                                    </div>
                                </div>
                                <h3 className="mb-0">Xisobot: Buxgalteriya balansi 2-
                                    kvartal</h3>
                                <div className="line"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src="./images/date.png" alt=""/>
                                        <p className="mb-0">16:48 / 12.11.20</p>
                                    </div>
                                    <div>
                                        <Link>Fotogalariya</Link>
                                    </div>
                                </div>
                                <h3 className="mb-0">Aksiyadorlik kompaniya tizim
                                    korxonalari</h3>
                                <div className="line"></div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img src="./images/date.png" alt=""/>
                                        <p className="mb-0">16:48 / 12.11.20</p>
                                    </div>
                                    <div>
                                        <Link>Fotogalariya</Link>
                                    </div>
                                </div>
                                <h3 className="mb-0">Xisobot: Buxgalteriya balansi 2-
                                    kvartal</h3>

                            </div>
                        </div>
                        <div className="card second-card">
                            <div className="card-body">
                                <h2 >Shikoyatlar mavjudmi?
                                    Onlayn tarzda yuboring</h2>
                                <img src="./images/gov.png" alt=""/>
                                <h3>Davlat interaktiv
                                    xizmatlari yagona portali</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;