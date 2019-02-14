import  { createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todosagas from './sagas'
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// )
const store = createStore(reducer,enhancer);
sagaMiddleware.run(todosagas);

export default store;