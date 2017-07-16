import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createHashHistory } from 'history';
import rootReducer from '../rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../rootSaga';

const history = createHashHistory();

const create = (initialState) => {
    const middleware = [];
    const enhancers = [];

    middleware.push(thunk);
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    const logger = createLogger({
        level: 'info',
        collapsed: true
    });

    middleware.push(logger);
    
    enhancers.push(applyMiddleware(...middleware));
    
    const enhancer = compose(...enhancers);
    const store = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);
    return store;
}

export { create, history };
export default create;