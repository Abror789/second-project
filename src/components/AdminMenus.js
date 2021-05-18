import React from 'react';
import AdminLayout from "./AdminLayout";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {updateState} from "../Redux/actions/menusAction";

const AdminMenus = (props) => {
    return (
        <AdminLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h5>Menu</h5>
                <button type="button" className="btn btn-success" onClick={()=>props.updateState({modalOpen: true})} >Add</button>
            </div>
            <Modal isOpen={props.modalOpen}>
                <ModalHeader>

                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>


        </AdminLayout>
    );
};

const mapStateToProps=(state)=>{
    return{
        modalOpen: state.menus.modalOpen
    }
}

export default connect(mapStateToProps,{updateState})(AdminMenus) ;