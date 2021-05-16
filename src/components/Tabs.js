import React,{useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className="tabs">
            <div className="container">
                <h2>Media</h2>
              <div className="row">
                  <div className="col-6">
                      <div className="white">
                          <Nav tabs>
                              <NavItem className="navv-item">
                                  <NavLink
                                      className={classnames({ active: activeTab === '1' })}
                                      onClick={() => { toggle('1'); }}
                                  >
                                      Barchasi
                                  </NavLink>
                              </NavItem>
                              <NavItem className="navv-item">
                                  <NavLink
                                      className={classnames({ active: activeTab === '2' })}
                                      onClick={() => { toggle('2'); }}
                                  >
                                      Foto galariya
                                  </NavLink>
                              </NavItem>
                              <NavItem className="navv-item">
                                  <NavLink
                                      className={classnames({ active: activeTab === '3' })}
                                      onClick={() => { toggle('3'); }}
                                  >
                                      Video galariya
                                  </NavLink>
                              </NavItem>
                          </Nav>
                      </div>
                  </div>
              </div>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row className="row-4">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div  className="card-header">
                                        <img  src="./images/girls2.png" alt=""/>
                                        <img className="video"  src="./images/camera.png" alt=""/>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div  className="card-header">
                                        <img  src="./images/men.png" alt=""/>
                                        <img className="video"  src="./images/video.png" alt=""/>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row className="row-4" >

                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <div  className="card-header">
                                            <img  src="./images/girls2.png" alt=""/>
                                            <img className="video"  src="./images/camera.png" alt=""/>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>


                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row className="row-4">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <div  className="card-header">
                                        <img  src="./images/men.png" alt=""/>
                                        <img className="video"  src="./images/video.png" alt=""/>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
};

export default Tabs;