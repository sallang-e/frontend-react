import { combineReducers } from 'redux';
import { loginReducer } from './reducers';

const rootReducer = combineReducers({
  token: loginReducer,
});

export default rootReducer;