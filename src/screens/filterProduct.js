import React from 'react';
import {View} from 'react-native';
import ProductFilter from '../components/customer/productFilter';
import SearchFilter from '../components/customer/searchFilter';
import {useSelector} from 'react-redux';
import ProductAdminFilter from '../components/admin/productFilterAdmin';

const FilterProduct = ({navigation}) => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <SearchFilter navigation={navigation} />
        {isAdmin ? (
          <ProductAdminFilter navigation={navigation} />
        ) : (
          <ProductFilter navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default FilterProduct;