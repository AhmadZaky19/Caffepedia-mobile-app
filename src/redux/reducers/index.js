import {combineReducers} from 'redux';
import menuReducer from './menu';
import authReducer from './auth';

const indexReducer = combineReducers({
  menu: menuReducer,
  auth: authReducer,
});

export default indexReducer;
