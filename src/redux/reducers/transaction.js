import actionType from '../actions/actionType';

let initialState = {
  data: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const transactionReducer = (prevState = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getAllTransaction + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllTransaction + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case actionType.getAllTransaction + '_FULFILLED':
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    default:
      return prevState;
  }
};

export default transactionReducer;
