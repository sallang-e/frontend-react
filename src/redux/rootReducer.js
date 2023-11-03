import { combineReducers } from 'redux';
import { loginReducer, pageReducer } from './reducers';

const rootReducer = combineReducers({
  token: loginReducer,
  page: pageReducer,
});

export default rootReducer;