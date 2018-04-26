import { combineReducers } from 'redux';
import emailReducer from './reducer_email.js';

const rootReducer = combineReducers({
  Email: emailReducer
 });

export default rootReducer;
