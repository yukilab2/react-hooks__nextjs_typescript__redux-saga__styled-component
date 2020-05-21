import {combineReducers} from 'redux';
import * as Types from './types';
import $ from 'jquery';

const initial: Types.StateT = {
  item: null,
  // list: [],
  list: [{id: 0, name:'first'}],
  error: null
};

const errorsReducer = (state = initial.error, action: any) => {
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

const itemReducer = (state = initial.item, action: any) => {
  switch (action.type) {
    case Types.ActionType.initItem: {
      return null;
    }
    case Types.ActionType.storeItem: {
      return $.extend({}, state, (action as Types.ItemT));
    }
    default:
      return state || null;
  }
};

const listReducer = (state = initial.list, action: any) => {
  switch (action.type) {
    case Types.ActionType.storeList: {
      return action.payload;
    }
  }
  return state
};

const reducer = combineReducers({
  item: itemReducer,
  list: listReducer,
  error: errorsReducer
});

export default reducer;
