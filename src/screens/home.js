import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryCreator, getMenuCreator} from '../redux/actions/menu';
import {getDataUserCreator} from '../redux/actions/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import style from '../style/home';

import ListFood from '../components/listFood';

const HomeMenu = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();

  const id = () => {
    if (auth.data !== null) {
      return auth.data.id;
    } else {
      return null;
    }
  };

  useEffect(() => {
    dispatch(getCategoryCreator());
    dispatch(getMenuCreator());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDataUserCreator(id()));
  }, []);
  useEffect(() => {
    if (auth.isLogin === false) {
      navigation.navigate('auth');
    }
  });

  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={styleHome.logoName}>
            <View style={style.logo}>
              <Fork name="food-fork-drink" size={25} color="white" />
            </View>
            <Text style={styleHome.brandName}>Cafepedia</Text>
          </View>
          <View style={styleHome.rightIcon}>
            <TouchableOpacity onPress={() => navigation.navigate('search')}>
              <Icon name="search" size={25} style={styleHome.search} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListFood navigation={navigation} />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeMenu;

const styleHome = StyleSheet.create({
  logoName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: 5,
    fontSize: 25,
  },
  rightIcon: {
    padding: 4,
    flexDirection: 'row',
  },
  search: {
    marginRight: 5,
  },
});
