import Axios from 'axios';

export const getAllMenu = () => {
  const URI = `${process.env.REACT_APP_LINK_API}pagination?page=1&limit=9`;
  return Axios.get(URI);
};

export const getAllTransaksi = () => {
  const URI = `${process.env.REACT_APP_LINK_API}transaction`;
  return Axios.get(URI);
};

export const getAllCategory = () => {
  const URI = `${process.env.REACT_APP_LINK_API}categories`;
  return Axios.get(URI);
};

export const searchMenu = (name, by) => {
  const URI = `${process.env.REACT_APP_LINK_API}search?name=${name}&by=${by}`;
  return Axios.get(URI);
};

export const authLogin = (name, password) => {
  const URI = `${process.env.REACT_APP_LINK_API}auth/login`;
  return Axios.post(URI, {
    username: name,
    password: password,
  });
};