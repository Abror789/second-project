import React,{useState} from 'react';
import {Link} from "react-router-dom";

const Cards = () => {
    return (
       <div className="cards">
           <div className="container">
               <div className="row row-1">
                   <div className="col-12 d-flex justify-content-between align-items-center">

                       <div> <h2 className="mb-0">Yangiliklar</h2></div>
                       <div className="d-flex justify-content-start align-items-center">
                           <button className="btn"><img className="mr-3" src="./images/arrow-left.png" alt=""/></button>
                           <button className="btn"><img src="./images/arrow-right.png" alt=""/></button>
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
                           <div style={{background:"#fff"}} className="card-header  text-center">
                               <img style={{width:"300px"}}  src="./images/don2.png" alt=""/>
                           </div>
                           <div className="card-body">
                               <div className="info d-flex justify-content-between align-items-center">
                                   <div className="d-flex justify-content-start align-items-center">
                                       <img  src="./images/date.png" alt=""/>
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
                                   <h3>Eksport qiluvchi tadbirkorlik
                                       subektlariga...!</h3>
                                   <p>“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy...</p>
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
               <div className="row row-1">
                   <div className="col-12 d-flex justify-content-between align-items-center">

                       <div> <h2 className="mb-0">Korxonamiz yangiliklari</h2></div>
                       <div className="d-flex justify-content-start align-items-center">
                           <button className="btn"><img className="mr-3" src="./images/arrow-left.png" alt=""/></button>
                           <button className="btn"><img src="./images/arrow-right.png" alt=""/></button>
                       </div>

                   </div>
               </div>
               <div className="row row-3">
                   <div className="col-12 col-md-6 col-lg-4">
                       <div className="card">
                           <div className="card-header">
                               <img   src="./images/ad.png" alt=""/>
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
                                   <p>2019 yil 27-mart kuni soat 10.00da “Do‘stlikdonmaxsulotlari” aksiyadorlik jamiyati aksiyadorlarining umumiy</p>
                                   <button type="button" className="btn btn-outline-secondary">Batafsil</button>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-12 col-md-6 col-lg-4">
                       <div className="card">
                           <div  className="card-header">
                               <img  src="./images/girls.png" alt=""/>
                           </div>
                           <div className="card-body">
                               <div className="info d-flex justify-content-between align-items-center">
                                   <div className="d-flex justify-content-start align-items-center">
                                       <img  src="./images/date.png" alt=""/>
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
                                   <button type="button" className="btn btn-outline-secondary"><Link to="/second" ><Link to="/second">Batafsil</Link></Link></button>

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
                                   <p>Buxgalteriya balansi 2 kvartal bo’yicha
                                       foto jamlanma.</p>
                                   <button type="button" className="btn btn-outline-secondary">Batafsil</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="ad">
               <div className="container-fluid">
                   <div className="row">

                           <div className="col-3"><img src="./images/people.png" alt=""/></div>
                           <div className="col-4"><h1 className='mb-0'>Shikoyatlar mavjudmi?<br/>
                               onlayn tarzda yuboring</h1></div>
                           <div className="col-2"><button type="button" className="btn">Murojaat yuborish</button></div>
                           <div className="col-3"><img src="./images/my-gov.png" alt=""/></div>

                   </div>
               </div>
           </div>
       </div>
    );
};

export default Cards;