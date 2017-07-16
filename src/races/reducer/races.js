import * as types from '../actionTypes';
import { combineReducers } from 'redux';

const setRaces = (state, {payload}) =>{
    let { races } = payload;
    return {
        ...state,
        ...races
    }
}

const updateRace = (state, {payload}, changes) =>{
    let { raceId } = payload;
    let race = state[raceId];

    var result = { 
            ...state,
            ...{ 
                [raceId] : {
                ...race,
                ...changes,
            }
        }
    }
    return result;
}

const setAllRaceIds = (state, {payload, ...rest}) => {
    var { raceIds } = payload;

    return [...raceIds];
}

const setRaceImminent = (state, action) =>{
    return updateRace(state, action, { imminent: true });
}

const setRaceCompleted = (state, action) => {
    return updateRace(state, action, { completed: true });
}

const racesById= (state= {}, action) => {
    switch(action.type){
        case types.SET_RACES: return setRaces(state, action);
        case types.RACE_IMMINENT: return setRaceImminent(state, action);
        case types.RACE_COMPLETED: return setRaceCompleted(state, action);
        default: return state;
    }
}

const allRaces = (state=[], action) => {
     switch(action.type){
        case types.SET_RACES: return setAllRaceIds(state, action);
        default: return state;
     }
}

export default combineReducers({
    byId: racesById,
    allIds: allRaces
});
