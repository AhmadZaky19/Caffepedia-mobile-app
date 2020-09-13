import actionType from '../actions/actionType';

let initialState = {
  data: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const categoryReducer = (prevState = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getAllCategory + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllCategory + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case actionType.getAllCategory + '_FULFILLED':
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

export default categoryReducer;
