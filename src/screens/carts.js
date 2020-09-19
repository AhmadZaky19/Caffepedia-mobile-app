import React from 'react';
import {View} from 'react-native';

import BottomNav from '../components/customer/bottomNav';
import CartHeader from '../components/customer/cartHeader';
import Cart from '../components/customer/carts';

const Carts = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <CartHeader />
          <Cart />
        </View>
        <BottomNav navigation={navigation} />
      </View>
    </>
  );
};

export default Carts;