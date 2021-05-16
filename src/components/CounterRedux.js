import React from 'react';
import {connect} from "react-redux";
import {incrementNumber} from "../redux/actions/counterAction";

const CounterRedux = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">{props.number}</h3>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button onClick={props.incrementNumber} type="button" className="btn btn-success">+</button>
                            <button type="button" className="btn btn-primary">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps=(state)=>{
    return{
        number:state.counter.number
    }
}
export default connect(mapStateToProps, {incrementNumber})(CounterRedux);