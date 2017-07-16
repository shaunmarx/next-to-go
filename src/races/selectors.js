import { createSelector } from 'reselect';
import {  props, map, curry, filter } from 'ramda';
import { name } from './constants';
import { parse, differenceInSeconds } from 'date-fns';

const isRaceReadyForCompletion = (race) => {
    return differenceInSeconds( parse(race.raceStartTime), Date.now()) <= -120;
}

export const isRaceImminent = (race) => {
    return differenceInSeconds( parse(race.raceStartTime), Date.now()) <= 300;
}

export const getRacesState = state => state[name];
export const getRacesEntitiesState = state => getRacesState(state).races;
export const getNextRacesState = state => getRacesState(state).next;

const mapPropsWithValue = curry((name, values, obj) => {
    var result = [];
    for(var i=0; i < values.length; i++){
        let value = values[i];

        if(obj.hasOwnProperty(value)){
            result.push({ ...obj[value], ...{[name]: value}} );
        }
    }
    return result;
});

const mapPropsWithId = mapPropsWithValue("id");

export const getNextRaces = createSelector(
    getNextRacesState, 
    getRacesEntitiesState, 
    ({allIds: ids}, {byId: races}) =>
        mapPropsWithId(ids, races)); 

export const getMeetingsState = createSelector(getRacesState, (races) => races.meetings);
export const getMeetings = createSelector(getMeetingsState, (meetings) => meetings.byId);
export const getImminentRaces = state => filter(isRaceImminent, getNextRaces(state));
export const getRacesForCompletion = state => filter(isRaceReadyForCompletion, getNextRaces(state));
export const getJurisdiction = state => getRacesState(state).jurisdiction.current;
export const getRequestState = state => getRacesState(state).requests;
export const isRequesting = state => getRequestState(getRequestState).isRequesting;

