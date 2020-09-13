import {
  getAllProduct,
  searchProduct,
  getAllCategory,
  authLogin,
  authRegister,
  getAllTransaction,
} from '../../utils/http';
import actionType from './actionType';

export const getAllProductCreator = () => {
  console.log(getAllProduct());
  return {
    type: actionType.getAllProduct,
    payload: getAllProduct(),
  };
};

export const clearProductCreator = () => {
  return {
    type: actionType.clearProduct,
  };
};

export const searchProductCreator = (name, by) => {
  return {
    type: actionType.getAllProduct,
    payload: searchProduct(name, by),
  };
};

export const getAllCategoryCreator = () => {
  return {
    type: actionType.getAllCategory,
    payload: getAllCategory(),
  };
};

export const addToCartCreator = (data) => {
  return {
    type: actionType.addToCart,
    payload: data,
  };
};

export const deleteCartCreator = (data) => {
  return {
    type: actionType.deleteCart,
    payload: data,
  };
};

export const deleteALLCartCreator = () => {
  return {
    type: actionType.deleteAllCart,
  };
};

export const updateInvoiceCreator = () => {
  return {
    type: actionType.updateInvoice,
  };
};

export const plusQtyCreator = (index) => {
  return {
    type: actionType.plusQty,
    payload: index,
  };
};

export const minusQtyCreator = (index) => {
  return {
    type: actionType.minusQty,
    payload: index,
  };
};

export const authLoginCreator = (name, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(name, password),
  };
};

export const authRegisterCreator = (name, email, password) => {
  return {
    type: actionType.authLogin,
    payload: authRegister(name, email, password),
  };
};

export const checkedProductCreator = (index) => {
  return {
    type: actionType.checkedProduct,
    payload: index,
  };
};

export const uncheckedProductCreator = (index) => {
  return {
    type: actionType.checkedProduct,
    payload: index,
  };
};

export const getAllTransactionCreator = () => {
  return {
    type: actionType.getAllTransaction,
    payload: getAllTransaction(),
  };
};

export const logoutCreator = () => {
  return {
    type: actionType.logout,
  };
};
