import actionType from '../actions/actionType';

let initialState = {
  data: [],
  filterProduct: [],
  editProduct: [],
  error: '',
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const productReducer = (prevState = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getAllProduct + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllProduct + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.getAllProduct + '_FULFILLED':
      let newData = payload.data.data.map((item) => {
        const dataProduct = {
          id_product: item.id_product,
          img_product: item.img_product,
          name_category: item.name_category,
          name_product: item.name_product,
          price_product: item.price_product,
          id_category: item.id_Category,
          checked: false,
        };
        return dataProduct;
      });

      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: newData,
        isRejected: false,
      };

    case actionType.getMoreProduct + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getMoreProduct + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.getMoreProduct + '_FULFILLED':
      let newerData = payload.data.data.map((item) => {
        const dataProduct = {
          id_product: item.id_product,
          img_product: item.img_product,
          name_category: item.name_category,
          name_product: item.name_product,
          price_product: item.price_product,
          id_category: item.id_Category,
          checked: false,
        };
        return dataProduct;
      });
      const arr = [...prevState.data];
      const newArr = arr.concat(newerData);
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: newArr,
        isRejected: false,
      };

    case actionType.editProduct:
      return {
        ...prevState,
        editProduct: payload,
      };

    case actionType.searchProduct + '_PENDING':
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.searchProduct + '_REJECTED':
      return {
        ...prevState,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.searchProduct + '_FULFILLED':
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };

    case actionType.checkedProduct:
      let arrData = [...prevState.data];
      arrData[payload] = {
        ...arrData[payload],
        checked: true,
      };
      return {
        ...prevState,
        data: arrData,
      };

    case actionType.unCheckedProduct:
      arrData[payload] = {
        ...arrData[payload],
        checked: false,
      };
      return {
        ...prevState,
        data: arrData,
      };

    case actionType.clearProduct:
      return {
        ...prevState,
        data: [],
      };

      case actionType.filterProduct + '_PENDING':
        return {
          ...prevState,
          isPending: true,
        };
      case actionType.filterProduct + '_REJECTED':
        return {
          ...prevState,
          isRejected: true,
          data: payload,
          isPending: false,
        };
      case actionType.filterProduct + '_FULFILLED':
        console.log(payload.data);
        return {
          ...prevState,
          isFulfilled: true,
          isPending: false,
          filterProduct: payload.data.data,
          isRejected: false,
        };

    default:
      return prevState;
  }
};

export default productReducer;
