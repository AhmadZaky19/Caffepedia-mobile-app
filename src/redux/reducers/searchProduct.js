import actionType from '../actions/actionType';

let initialState = {
  data: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const searchProduct = (prevState = initialState, {type, payload}) => {
  switch (type) {
    case actionType.searchProduct + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.searchProduct + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.searchProduct + '_FULFILLED':
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    case actionType.clearSearch:
      return {
        ...prevState,
        data: [],
      };
    default:
      return prevState;
  }
};

export default searchProduct;