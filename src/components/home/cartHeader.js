import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import {clearProductCreator} from '../../redux/actions/action';

const CartHeader = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: '#90ee90',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(clearProductCreator());
            navigation.navigate('home');
          }}
          style={{position: 'relative', marginLeft: 10, flex: 1}}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={{width: 25, height: 25, position: 'absolute', left: 10, backgroundColor: '#90ee90'}}
          />
        </TouchableOpacity>
        <View
          style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Cart</Text>
        </View>
      </View>
    </>
  );
};

export default CartHeader;
