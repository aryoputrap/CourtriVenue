import {ADD_PROMO, ADD_BOOKING} from '../types';

const INITIAL_STATE = {
  promo: '',
  isPromo: false,
  date: '',
  isBook: false,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_BOOKING:
      return {
        ...state,
        date: payload,
        isBook: true,
        promo: '',
        isPromo: false,
      };
    case ADD_PROMO:
      return {
        ...state,
        promo: payload,
        isPromo: true,
      };
    default:
      return state;
  }
};

export default homeReducer;
