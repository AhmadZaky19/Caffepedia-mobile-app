import Axios from 'axios';

export const getAllProduct = () => {
  const URI = `http://192.168.1.5:8000/pagination?page=1&limit=9`;
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
