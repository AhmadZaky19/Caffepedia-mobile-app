import React from 'react';
import {View} from 'react-native';

import BottomNav from '../components/home/bottomNav';
import CartHeader from '../components/home/cartHeader';
import Cart from '../components/home/carts';

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