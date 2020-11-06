import Axios from 'axios';

export const getDataUser = (id) => {
  const URI = `http://192.168.1.5:8000/auth/getdata/${id}`;
  return Axios.get(URI);
};

export const getAllProduct = () => {
  const URI = `http://192.168.1.5:8000/pagination?page=1&limit=6`;
  return Axios.get(URI);
};

export const getMoreProduct = (page) => {
  const URI = `http://192.168.1.5:8000/pagination?page=${page}&limit=6`;
  return Axios.get(URI);
};

export const filterProduct = (by, order) => {
  const URI = `http://192.168.1.5:8000/sort?by=${by}&order=${order}`;
  return Axios.get(URI);
};

export const getAllTransaction = () => {
  const URI = `http://192.168.1.5:8000/transaction`;
  return Axios.get(URI);
};

export const getAllCategory = () => {
  const URI = `http://192.168.1.5:8000/categories`;
  return Axios.get(URI);
};

export const searchProduct = (name, by) => {
  const URI = `http://192.168.1.5:8000/search?name_product=${name}`;
  return Axios.get(URI);
};

export const authLogin = (name, password) => {
  const URI = `http://192.168.1.5:8000/auth/login`;
  return Axios.post(URI, {
    username: name,
    password: password,
  });
};

export const authRegister = (name, email, password) => {
  const URI = `http://192.168.1.5:8000/auth/register`;
  return Axios.post(URI, {
    username: name,
    email: email,
    password: password,
    level_id: 3,
  });
};
