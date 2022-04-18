import {ADD_PROMO, ADD_BOOKING} from '../types';

export const addBooking = item => {
  // console.log(item);
  return {type: ADD_BOOKING, payload: item};
};

export const addPromo = item => {
  // console.log(item);
  return {type: ADD_PROMO, payload: item};
};
