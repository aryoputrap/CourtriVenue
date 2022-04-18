import {ADD_ORDER} from '../types';

export const addOrder = item => {
  // console.log('[ACTION ADD_ORDER]', item);
  return {type: ADD_ORDER, payload: item};
};

