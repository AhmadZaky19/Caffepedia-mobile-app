import React, {useEffect} from 'react';
import Axios from 'axios';

import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getAllProductCreator} from '../redux/actions/action';

import BottomNav from '../components/customer/bottomNav';
import Search from '../components/customer/search';
import Product from '../components/customer/product';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductCreator());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Search />
        <Product navigation={navigation} />
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default Home;