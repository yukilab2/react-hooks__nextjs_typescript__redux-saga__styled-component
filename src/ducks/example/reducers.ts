import { combineReducers } from 'redux';
import * as Types from './types';
import $ from 'jquery';
import { SagaGenericRequestT } from '../type';

const initial: Types.StateT = {
  item: null,
  // list: [],
  list: [{ id: 0, name: 'first' }],
  error: null,
};

const errorsReducer = (state = initial.error, action: SagaGenericRequestT) => {
  switch (action.type) {
    case Types.ActionType.cleanError: {
      return undefined;
    }
    case Types.ActionType.storeError: {
      return action as Types.storeErrorPayloadT;
    }
    default:
      return state || null;
  }
};

const itemReducer = (state = initial.item, action: SagaGenericRequestT) => {
  switch (action.type) {
    case Types.ActionType.initItem: {
      return null;
    }
    case Types.ActionType.storeItem: {
      return $.extend({}, state, (action as unknown) as Types.ItemT);
    }
    default:
      return state || null;
  }
};

const listReducer = (state = initial.list, action: SagaGenericRequestT) => {
  switch (action.type) {
    case Types.ActionType.storeList: {
      return action.payload;
    }
  }
  return state;
};

const reducer = combineReducers({
  item: itemReducer,
  list: listReducer,
  error: errorsReducer,
});

export default reducer;
