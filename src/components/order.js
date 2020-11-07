import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Order = ({navigation}) => {
  const {menu} = useSelector((state) => state);
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigation.navigate('cart')}>
      <View style={style.logo}>
        <Icon name="shoppingcart" color="white" size={25} />
        <View style={style.badge}>
          <Text style={style.qty}>{menu.cart.length}</Text>
        </View>
      </View>

      <Text style={style.text}>Open order list</Text>
    </TouchableOpacity>
  );
};

export default Order;
const style = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    // paddingBottom: 40,
    paddingRight: 30,
    paddingLeft: 30,
    // padding: 23,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    position: 'relative',
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -5,
    left: 15,
    position: 'absolute',
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  qty: {
    color: 'white',
  },
});
