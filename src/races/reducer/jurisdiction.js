import * as types from '../actionTypes';

const INITIAL_STATE = {
    current: "NSW"
}

const requestsReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case types.SET_JURISDICTION: return { ...state, ...{current: action.jurisdiction }}
        default: return state;
    }
}  

export default requestsReducer;
