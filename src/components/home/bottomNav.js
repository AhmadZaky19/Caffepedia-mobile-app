import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const BottomNav = ({navigation}) => {
  return (
    <>
      <View
        style={{
          height: 55,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: '#e8e8e8',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/home.png')}
            style={{width: 23, height: 23}}
          />
          <Text style={{color: '#545454', marginTop: 4}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Orders')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/cart.png')}
            style={{width: 23, height: 23}}
          />
          <Text style={{color: '#545454', marginTop: 4}}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/clipboard.png')}
            style={{width: 23, height: 23}}
          />
          <Text style={{color: '#545454', marginTop: 4}}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/user.png')}
            style={{width: 23, height: 23}}
          />
          <Text style={{color: '#545454', marginTop: 4}}>Akun</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomNav;
