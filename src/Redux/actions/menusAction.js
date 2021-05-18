import {UPDATES_TATE} from "../types/menusType";


export const updateState=(data)=>{
    return{
        type:UPDATES_TATE,
        payload:data
    }
}