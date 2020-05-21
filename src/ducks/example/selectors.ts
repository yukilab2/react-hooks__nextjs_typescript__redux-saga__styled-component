import {TopState} from '../type';

const item = ({example}: TopState) => {
  return example.item;
};

const list = ({example}: TopState)  => {
  return example.list;
};

const error = ({example}: TopState)  => {
  return example.error;
};

export default {
  item,
  list,
  error
};
