import React from 'react';
import {View, Text} from 'react-native';
import style from '../style/splashScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('auth');
  }, 4000);
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.name}>Cafepedia</Text>
      </View>
    </View>
  );
};

export default SplashScreen;