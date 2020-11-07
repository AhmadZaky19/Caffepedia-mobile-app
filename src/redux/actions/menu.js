import {
  getMenu,
  getMenuAll,
  getCategory,
  searchMenu,
  getOrderHistory,
  insertOrder,
  deleteOrder,
  deleteMenu,
  editMenu,
  getMoreMenu,
  getAllOrderHistory,
} from '../../utils/http';
import {
  getMenuAction,
  getAllMenuAction,
  getCatAction,
  searchMenuAction,
  getOrderUserAction,
  insertOrderAction,
  byCategoryAction,
  addCartAction,
  plusQuantityAction,
  minQuantityAction,
  cancelCartAction,
  deleteOrderAction,
  clearAction,
  deleteMenuAction,
  editMenuAction,
  editDataMenuAction,
  changePending,
  getMoreAction,
  getAllOderAction,
} from '../actions/actionType';

export const getMenuCreator = () => {
  return {
    type: getMenuAction,
    payload: getMenu(),
  };
};
export const getMenuAllCreator = () => {
  return {
    type: getAllMenuAction,
    payload: getMenuAll(),
  };
};
export const getMoreCreator = (page) => {
  return {
    type: getMoreAction,
    payload: getMoreMenu(page),
  };
};
export const getCategoryCreator = () => {
  return {
    type: getCatAction,
    payload: getCategory(),
  };
};
export const searchMenuCreator = (name) => {
  return {
    type: searchMenuAction,
    payload: searchMenu(name),
  };
};

export const listByCategoryCreator = (category) => {
  return {
    type: byCategoryAction,
    payload: {
      name_category: category,
    },
  };
};

export const addCartCreator = (id, name, price, img) => {
  return {
    type: addCartAction,
    payload: {
      id_menu: id,
      name: name,
      quantity: 1,
      price: price,
      picture: img,
    },
  };
};

export const plusQuantityCreator = (id) => {
  return {
    type: plusQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};

export const minQuantityCreator = (id) => {
  return {
    type: minQuantityAction,
    payload: {
      id_menu: id,
    },
  };
};

export const cancelCartCreator = () => {
  return {
    type: cancelCartAction,
    payload: null,
  };
};

export const getOrderUserCreator = (name) => {
  return {
    type: getOrderUserAction,
    payload: getOrderHistory(name),
  };
};

export const getAllOrderCreator = () => {
  return {
    type: getAllOderAction,
    payload: getAllOrderHistory(),
  };
};

export const insertOrderCreator = (date, name, orders, amount) => {
  return {
    type: insertOrderAction,
    payload: insertOrder(date, name, orders, amount),
  };
};

export const deleteOrderCreator = (id) => {
  return {
    type: deleteOrderAction,
    payload: deleteOrder(id),
  };
};

export const clearCreator = () => {
  return {
    type: clearAction,
    payload: null,
  };
};

export const deleteMenuCreator = (id) => {
  return {
    type: deleteMenuAction,
    payload: deleteMenu(id),
  };
};

export const editMenuCreator = (
  id,
  name,
  price,
  picture,
  category,
  id_category,
) => {
  return {
    type: editMenuAction,
    payload: {
      id_menu: id,
      name: name,
      price: price,
      picture: picture,
      name_category: category,
      id_category: id_category,
    },
  };
};

export const editDataCreator = (name, image, price, id_category, id_menu) => {
  return {
    type: editDataMenuAction,
    payload: editMenu(name, image, price, id_category, id_menu),
  };
};

export const changePendingCreator = () => {
  return {
    type: changePending,
  };
};
