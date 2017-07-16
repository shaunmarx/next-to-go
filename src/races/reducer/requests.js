import * as types from '../actionTypes';

const request = (state, action) => ({ ...state, ...{ requesting: true, error: null }});
const requestFailure = (state, action) => ({ ...state, ...{ requesting: false, error: action.payload.reason }});

const requestsReducer = (state= {}, action) => {
    switch(action.type){
        case types.REQUEST_NEXT_RACES_REQUEST: return request(state, action)
        case types.REQUEST_NEXT_RACES_FAILURE: return requestFailure(state, action)
        default: return state;
    }
}  

export default requestsReducer;
