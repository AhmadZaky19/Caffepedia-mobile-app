import {
  loginAction,
  pending,
  rejected,
  fulfilled,
  logoutAction,
  registerAction,
  updateProfileAction,
  getDataUserAction,
} from '../actions/actionType';

const initialState = {
  data: null,
  status: 190,
  dataUser: [],
  dataUpdate: [],
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, {type, payload}) => {
  switch (type) {
    case loginAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case loginAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case loginAction + fulfilled:
      let admin = null;
      let login = null;
      if (payload.data.isSuccess) {
        if (payload.data.data.id_level === 2) {
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
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case logoutAction:
      return {
        ...state,
        data: null,
        dataUser: null,
        isAdmin: false,
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };
    case registerAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case registerAction + rejected:
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case registerAction + fulfilled:
      if (payload.data.isSuccess) {
        if (payload.data.data.id_level === 2) {
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
        data: payload.data.data,
        isRejected: false,
        isAdmin: admin,
        isLogin: login,
      };
    case updateProfileAction + pending:
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
      };
    case updateProfileAction + rejected:
      return {
        ...state,
        isRejected: true,
        dataUpdate: payload,
        isPending: false,
      };
    case updateProfileAction + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        dataUpdate: payload.data.data,
        isPending: false,
        status: 200,
      };
    case getDataUserAction + pending:
      return {
        ...state,
        isPending: true,
      };
    case getDataUserAction + rejected:
      return {
        ...state,
        isRejected: true,
        dataUser: payload,
        isPending: false,
      };
    case getDataUserAction + fulfilled:
      return {
        ...state,
        isFulfilled: true,
        dataUser: payload.data.data,
        isPending: false,
      };
    default:
      return state;
  }
};

export default auth;
