import { combineReducers } from 'redux';
import meetingsReducer from './meetings';
import nextRacesReducer from './nextRaces';
import requestsReducer from './requests';
import jurisdictionReducer from './jurisdiction';
import racesReducer from './races';

export default combineReducers({
    meetings : meetingsReducer, 
    next : nextRacesReducer,
    races: racesReducer,
    requests: requestsReducer,
    jurisdiction: jurisdictionReducer
})