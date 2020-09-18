import { combineReducers } from 'redux';
import browserState from './browserState';

const rootReducer = combineReducers({
  browserState
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;