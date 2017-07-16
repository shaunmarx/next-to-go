import * as types from "./actionTypes";

export const requestNextRaces= () => ({
    type: types.REQUEST_NEXT_RACES_REQUEST,
    payload :{ }
});

export const requestNextRacesFailed = (reason) => ({
    type: types.REQUEST_NEXT_RACES_FAILURE,
    payload :{ reason }
});

export const requestNextRacesSuccess = (result) => ({
    type: types.REQUEST_NEXT_RACES_SUCCESS,
    payload :{  result }
});

export const raceCompleted = (id) => ({
    type: types.RACE_COMPLETED,
    payload: {
        raceId: id
    }
});

export const setNextRaces = (entities, raceIds) => ({
    type: types.SET_NEXT_RACES,
    payload: {
        raceIds: raceIds
    }  
});

export const setRaceMeetings = (entities) => ({
    type: types.SET_MEETINGS,
    payload: {
        meetings: entities
    }
});

export const setJurisdiction = (jurisdiction) => ({
    type: types.SET_JURISDICTION,
    payload: {
        jurisdiction
    }
});

export const setRaces = (entities, raceIds) => ({
    type: types.SET_RACES,
    payload: {
        races: entities,
        raceIds
    }
});

export const setRaceImminent = (raceId) => ({
    type: types.RACE_IMMINENT,
    payload: {
        raceId
    }
});
