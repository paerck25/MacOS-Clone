import { combineReducers } from 'redux';
import browserState from './browserState';
import memoState from './memoState';

const rootReducer = combineReducers({
  browserState,
  memoState
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;