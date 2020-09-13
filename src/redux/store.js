import {createStore, applyMiddleware} from 'redux';

// import thunk from "redux-thunk";
import rpm from 'redux-promise-middleware';

import indexReducer from './reducers';

const enhancers = applyMiddleware(rpm);

const storeRedux = createStore(indexReducer, enhancers);

export default storeRedux;
