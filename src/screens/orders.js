import React from 'react';
import {View} from 'react-native';

import BottomNav from '../components/bottomNav';
import Header from '../components/header';
import Cart from '../components/cart';

const Orders = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <Cart />
        </View>
        <BottomNav navigation={navigation} />
      </View>
    </>
  );
};

export default Orders;