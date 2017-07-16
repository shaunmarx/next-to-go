import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as selectors from './selectors';
import * as types from './actionTypes';
import * as actions from './actions';
import api  from '../api';
import normalize from './schema';

export function* evaluateRaceCompletion(){
    while(true){
        const state = yield select();
        var races = selectors.getRacesForCompletion(state);
        var i =0;

        for(i=0; i < races.length; i++){
            let race = races[i];
            if(race.completed){
                continue;
            }
            yield put(actions.raceCompleted(race.id));
        }

        var imminent = selectors.getImminentRaces(state);

        for(i=0; i < imminent.length; i++){
            let imminentRace = imminent[i];
            if(imminentRace.imminent)
                continue;

            yield put(actions.setRaceImminent(imminentRace.id));
        }

        yield delay(1000);
    }
}

export function* fetchRaces(action){
    var state = yield select();
    var jurisdiction = selectors.getJurisdiction(state);

    try{
        let response = yield call(api.client.getNextToGoRaces, jurisdiction);
     
        const { entities, result } = normalize.racesList(response.races);
        yield put(actions.requestNextRacesSuccess(jurisdiction, response));
        yield put(actions.setRaceMeetings(entities.meetings));
        yield put(actions.setRaces(entities.races, result));
        yield put(actions.setNextRaces(result));

    }catch(e){
        yield put(actions.requestNextRacesFailed(jurisdiction, e.message))
    }
}

export function* main(){    
    yield takeLatest(types.REQUEST_NEXT_RACES_REQUEST, fetchRaces);
    yield takeLatest(types.RACE_COMPLETED, fetchRaces);
    yield put(actions.requestNextRaces());
    yield fork(evaluateRaceCompletion);

}

