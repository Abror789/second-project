import {UPDATES_TATE} from "../types/menusType";

const initialState={
    modalOpen:false
}


export const menusReducer=(state=initialState, action)=>{
    if (action.type===UPDATES_TATE){
        return {
            ...state,
            ...action.payload
        }
    }
   return state;
}