import * as types from '../actionTypes';
import { combineReducers } from 'redux';

var INITIAL_STATE = {
    byId: {}
};

var setMeetings = (state,  { payload }) =>{
    let { meetings } = payload;
    return { 
        ...state,
        ...meetings
    }
}

const meetingsById= (state= {}, action) => {
    switch(action.type){
        case types.SET_MEETINGS: return setMeetings(state, action);
        default: return state;
    }
}

export default combineReducers({
    byId: meetingsById
});
