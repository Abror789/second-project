import React from 'react';
import {Link} from "react-router-dom";

const AdminLayout = (props) => {
    const location=window.location.href;
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="d-flex align-items-center user-image">
                    <div>
                        <img src="/images/man.png" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-0">Abrorbek Ma'rufov</h5>
                        <p className="mb-0">Adminstrator</p>
                    </div>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item"><Link to="/admin/menus" className={`nav-link ${location.includes("/admin/menus") ? 'active' : ''}`}>Menus</Link></li>
                    <li className="nav-item"><Link to="/admin/news" className={`nav-link ${location.includes("/admin/news") ? 'active' : ''}`}>News</Link></li>
                    {/*<li className="nav-item"><Link to="/admin/news" className="nav-link">News</Link></li>*/}
                    {/*<li className="nav-item"><Link to="/admin/news" className="nav-link">News</Link></li>*/}
                    {/*<li className="nav-item"><Link to="/admin/news" className="nav-link">News</Link></li>*/}
                    {/*<li className="nav-item"><Link to="/admin/news" className="nav-link">News</Link></li>*/}
                </ul>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;