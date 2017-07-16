import * as types from '../actionTypes';
import { combineReducers } from 'redux';
import { curry, sortBy } from 'ramda';

var INITIAL_STATE = {
    allIds: []
};

const setNextRacesIds = (state, {payload, ...rest}) => {
    var { raceIds } = payload;

    return [...raceIds];
}

const allRaces = (state=[], action) => {
     switch(action.type){
        case types.SET_RACES: return setNextRacesIds(state, action);
        default: return state;
     }
}

export default combineReducers({
    allIds: allRaces
})
