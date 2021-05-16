import {INCREMENT_COUNTER} from "../types/counterTypes";

const initialState={
    number:0
}


export const counterReducer=(state=initialState, action)=>{
    if (action.type===INCREMENT_COUNTER){
        return {
            number: state.number+1
        }
    }


    return state;
}