import { combineReducers } from 'redux';
import { toast } from 'react-toastify';

import types from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (payload.name === '' || payload.number === '') {
        toast.info('Please fill all fields');
        return state;
      } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(payload.number)) {
        toast.error('Enter the correct  phone number');
        return state;
      } else if (
        state.find(
          item => item.name.toLowerCase() === payload.name.toLowerCase(),
        )
      ) {
        toast.info(`Name ${payload.name} is already exsist`);
        return state;
      }
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
