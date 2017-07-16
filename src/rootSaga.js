import { all } from 'redux-saga/effects'
import races from './races';

export default function* rootSaga()
{
    yield all([
        races.sagas.main(),
    ])
}
