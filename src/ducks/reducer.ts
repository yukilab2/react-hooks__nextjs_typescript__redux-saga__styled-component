import { combineReducers } from 'redux';

import example, { types as ExampleTypes } from './example';

export type RootState = {
  example: ExampleTypes.StateT;
};

const rootReducer = combineReducers({
  example,
});

export default rootReducer;
