import {combineReducers} from 'redux';
import productReducer from './product';
import cartReducer from './cart';
import categoryReducer from './category';
import authReducer from './auth';
import transactionReducer from './transaction';
import searchProduct from './searchProduct';

const indexReducer = combineReducers({
  searchProduct: searchProduct,
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
  auth: authReducer,
  transaction: transactionReducer,
});

export default indexReducer;
