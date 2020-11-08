import Axios from 'axios';
import {API_URL} from './environment';

export const getMenu = () => {
  return Axios.get(`${API_URL}?page=1&limit=1000`);
};

export const getMenuAll = () => {
  return Axios.get(`${API_URL}?page=1&limit=6`);
};

export const getMoreMenu = (page) => {
  return Axios.get(`${API_URL}?page=${page}&limit=6`);
};

export const getCategory = () => {
  return Axios.get(`${API_URL}category`);
};

export const searchMenu = (name) => {
  const url = `${API_URL}search`;
  return Axios.get(`${url}?name=${name}&by=name`);
};

export const getOrderHistory = (name) => {
  const url = `${API_URL}orderuser?name=${name}`;
  return Axios.get(url);
};

export const getAllOrderHistory = () => {
  const url = `${API_URL}orderuser/all`;
  return Axios.get(url);
};

export const insertOrder = (date, name, orders, amount) => {
  const data = {
    date: date,
    name: name,
    orders: orders,
    amount: amount,
  };
  const url = `${API_URL}orderuser`;
  return Axios.post(url, data);
};

export const deleteOrder = (id) => {
  const url = `${API_URL}orderuser?id=${id}`;
  return Axios.delete(url);
};

export const deleteMenu = (id) => {
  const url = `${API_URL}?id=${id}`;
  return Axios.delete(url);
};

export const login = (username, password) => {
  const url = `${API_URL}auth/login`;
  return Axios.post(url, {
    username: username,
    password: password,
  });
};

export const register = (username, password) => {
  const url = `${API_URL}auth/register`;
  return Axios.post(url, {
    username: username,
    password: password,
    id_level: 3,
  });
};

// export const editMenu = (name, picture, price, id_category, id_menu) => {
//   let data = new FormData();
//   if (name !== null) {
//     data.append('name', name);
//   } else if (picture !== null) {
//     data.append('picture', {
//       uri: `file://${picture.path}`,
//       type: picture.type,
//       name: picture.fileName,
//       size: picture.fileSize,
//     });
//   } else if (price !== null) {
//     data.append('price', price);
//   } else if (id_category !== null) {
//     data.append('id_category', id_category);
//   }
//   data.append('id_menu', id_menu);
//   const config = {
//     headers: {
//       'content-type': 'multipart/form-data',
//       contentType: false,
//       mimeType: 'multipart/form-data',
//       'cache-control': 'no-cache',
//       accept: 'application/json',
//     },
//   };
//   const url = '${API_URL}';
//   return Axios.patch(url, data, config);
// };
export const editMenu = (name, picture, price, id_category, id_menu) => {
  let data = new FormData();
  if (name !== null) {
    data.append('name', name);
  } else if (picture !== null) {
    data.append('picture', {
      uri: `file://${picture.path}`,
      type: picture.type,
      name: picture.fileName,
      size: picture.fileSize,
    });
  } else if (price !== null) {
    data.append('price', price);
  } else if (id_category !== null) {
    data.append('id_category', id_category);
  }
  data.append('id_menu', id_menu);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = `${API_URL}`;
  return Axios.patch(url, data, config);
};

export const updateProfile = (username, image, id) => {
  let data = new FormData();
  if (username !== null) {
    data.append('username', username);
  } else if (image !== null) {
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('id', id);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  const url = `${API_URL}auth/update`;
  return Axios.patch(url, data, config);
};

export const getDataUser = (id) => {
  const url = `${API_URL}auth?id=${id}`;
  return Axios.get(url);
};
