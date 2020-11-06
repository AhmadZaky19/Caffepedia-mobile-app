import actionType from '../actions/actionType';

const initialState = {
  data: null,
  dataUser: null,
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.authLogin + '_PENDING':
      return {
        ...state,
        isPending: true,
      };
    case actionType.authLogin + '_REJECTED':
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.authLogin + '_FULFILLED':
      let admin = null;
      let login = null;
      if (payload.data.success) {
        if (payload.data.data.level_id === 2) {
          admin = true;
          login = true;
        } else {
          admin = false;
          login = true;
        }
      } else {
        admin = false;
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case actionType.logout:
      return {
        ...state,
        data: {},
        isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
      case actionType.getDataUser + '_PENDING':
        return {
          ...state,
          isPending: true,
        };
      case actionType.getDataUser + '_REJECTED':
        return {
          ...state,
          isRejected: true,
          data: payload,
          isPending: false,
        };
      case actionType.getDataUser + '_FULFILLED':
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          dataUser: payload.data.data,
          isRejected: false,
        };
      case actionType.logout:
        return {
          ...state,
          data: {},
          dataUser: {},
          isAdmin: false,
          isLogin: false,
          isPending: false,
          isFulfilled: false,
          isRejected: false,
        };
      default:
        return state;
    }
  };

export default auth;
