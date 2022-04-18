import {ADD_ORDER} from '../types';

const INITIAL_STATE_ORDER = {
    orders: [],
};

const orderReducer = (state = INITIAL_STATE_ORDER, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_ORDER:
      // console.log('[PAYLOAD ADD_ORDER]', payload.title);
      // console.log('[STATE_ORDER]', state.orders);
      const arrOrders = [...state.orders];
      const index = arrOrders.findIndex((item) => item.title === payload.title);
      // console.log('ini index', index);
      // console.log('[ARR_ORDER]', arrOrders);
      const dataInpt = arrOrders.map((itm) => {
        // console.log('ITM', itm.title, payload.title);
        if(itm.title == payload.title){
          return(
            arrOrders[index] = payload
          )
        } 
        return itm
      })

      // console.log('[INPUT]',dataInpt)
      return {
        ...state,
        orders: index === -1 ? [...state.orders, payload] : dataInpt
      };
    default:
      return state;
  }
};

export default orderReducer;
