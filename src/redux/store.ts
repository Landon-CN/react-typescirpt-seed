import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from '../modules/reducer';
import promiseMiddle from 'redux-promise';


let composeEnhancers = compose;
if (process.env.NODE_ENV) {
    composeEnhancers = typeof window === 'object' &&
        (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
}

const enhancer = composeEnhancers(
    applyMiddleware(promiseMiddle),
);

export default function configureStore(initialState = {}) {
    const store = createStore(createReducer(),
        initialState,
        enhancer
    );
    if (module.hot) {
        module.hot.accept('../modules/reducer', () => {
            const createNextReducer = require('../modules/reducer').default;
            store.replaceReducer(createNextReducer());
        })
    }

    return store;
}