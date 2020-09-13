import React, {useEffect} from 'react';
import Axios from 'axios';

import {View} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {getAllMenuCreator} from '../redux/actions/action';

import BottomNav from '../components/bottomNav';
import Search from '../components/search';
import Menu from '../components/menu';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMenuCreator());
    // const URI = `http://192.168.43.116:8000/pagination?page=1&limit=9`;
    // return Axios.get(URI)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Search />
        <Menu navigation={navigation} />
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default Home;