import actionType from '../actions/actionType';
const intialState = {
  data: [],
  invoice: new Date().getTime(),
};

const cartReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case actionType.addToCart:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case actionType.deleteCart:
      state.data.splice(payload, 1);
      return {
        ...state,
        data: state.data,
      };
    case actionType.deleteAllCart:
      return {
        ...state,
        data: [],
      };
    case actionType.updateInvoice:
      return {
        ...state,
        invoice: new Date().getTime(),
      };
    case actionType.plusQty:
      let arrData = [...state.data];
      arrData[payload] = {
        ...arrData[payload],
        qty: state.data[payload].qty + 1,
      };
      return {
        ...state,
        data: arrData,
      };
    case actionType.minusQty:
      if (state.data[payload].qty > 1) {
        let arrData = [...state.data];
        arrData[payload] = {
          ...arrData[payload],
          qty: state.data[payload].qty - 1,
        };
        return {
          ...state,
          data: arrData,
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
