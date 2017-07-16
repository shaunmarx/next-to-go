import { combineReducers } from 'redux';
import races from './races';
import { routerReducer as router } from 'react-router-redux';

export default combineReducers({
    [races.constants.name]: races.reducer,
    router,
})
