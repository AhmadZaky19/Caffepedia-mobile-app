import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import {Button} from 'native-base';

const Header = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: 'pink',
        }}>
        <TouchableOpacity
          style={{position: 'relative', marginLeft: 10, flex: 1}}>
          <Image
            source={require('../../assets/icons/back.png')}
            style={{width: 25, height: 25, position: 'absolute', left: 10}}
          />
        </TouchableOpacity>
        <View
          style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Orders</Text>
        </View>
      </View>
    </>
  );
};

export default Header;