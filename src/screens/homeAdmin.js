import React from 'react';
import {View, Text} from 'react-native';
import ProductAdmin from '../components/admin/product';
import Search from '../components/customer/search';

const HomeAdmin = ({navigation}) => {
  return (
    <View style={{flex: 1, marginBottom: 70}}>
      <View style={{flex: 1}}>
        <Search />
        <ProductAdmin navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeAdmin;