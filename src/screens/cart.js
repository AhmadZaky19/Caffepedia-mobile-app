/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import {Overlay} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  plusQuantityCreator,
  minQuantityCreator,
  cancelCartCreator,
  insertOrderCreator,
} from '../redux/actions/menu';
import style from '../style/cart';
import img from '../image/oops.jpg';

let monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ex = new Date();
const date = ex.getDate();
const month = monthName[ex.getMonth()];
const year = ex.getFullYear();
const fullYear = `${date}-${month}-${year}`;

const getDate = new Date().getDate().toString();
const getMil = new Date().getMilliseconds().toString();
const id = getDate + getMil;

const Cart = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const {menu, auth} = useSelector((state) => state);
  const price = menu.cart.map((item) => {
    return item.price * item.quantity;
  });
  const name = () => {
    if (auth.data !== null) {
      return auth.data.username;
    }
  };
  const totalPrice = price.reduce((total, index) => {
    return total + index;
  }, 0);
  const plusDelivery = totalPrice + 15000;
  const orders = menu.cart.map((item) => {
    return item.name;
  });

  const toggleOverlay = () => {
    setTimeout(() => {
      setVisible(!visible);
    }, 2000);
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.logoName}>
          <View style={style.logo}>
            <Fork name="food-fork-drink" size={15} color="black" />
          </View>
          <Text style={style.brandName}>Cafepedia</Text>
        </View>
        <TouchableOpacity
          style={style.trash}
          onPress={() => {
            dispatch(cancelCartCreator());
          }}>
          {menu.cart.length ? (
            <Icon name="trash-bin" size={23} color="white" />
          ) : (
            <Icon name="trash-bin-sharp" size={23} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <View style={style.title}>
        <Text style={style.shopBag}>My order list</Text>
        <Text style={style.qty}>{menu.cart.length} items add</Text>
      </View>
      <ScrollView
        style={style.listContainer}
        showsVerticalScrollIndicator={false}>
        {menu.cart.map((item, index) => {
          return (
            <View style={style.list} key={index}>
              <Image source={{uri: item.picture}} style={style.listPic} />
              <View style={style.desc}>
                <Text style={style.nameFood}>{item.name}</Text>
                <View style={style.handleQty}>
                  {item.quantity !== 1 ? (
                    <TouchableOpacity
                      style={style.minus}
                      onPress={() =>
                        dispatch(minQuantityCreator(item.id_menu))
                      }>
                      <Text>-</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={style.minus}
                      onPress={() =>
                        dispatch(minQuantityCreator(item.id_menu))
                      }>
                      <Fork name="trash-can" size={15} color="black" />
                    </TouchableOpacity>
                  )}
                  <View style={style.numQty}>
                    <Text>{item.quantity}</Text>
                  </View>
                  <TouchableOpacity
                    style={style.plus}
                    onPress={() => {
                      dispatch(plusQuantityCreator(item.id_menu));
                    }}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.cart}>
                <Text style={style.cartText}>
                  Rp. {item.price * item.quantity}
                </Text>
              </View>
            </View>
          );
        })}
        {menu.cart.length ? (
          <View style={style.checkOut}>
            <View style={style.totalText}>
              <Text style={style.text}>Total</Text>
              <Text style={style.text}>Delivery</Text>
              <Text style={style.total}>Total</Text>
              <TouchableOpacity
                style={style.button}
                onPress={() => {
                  dispatch(cancelCartCreator());
                  dispatch(
                    insertOrderCreator(
                      fullYear,
                      name(),
                      orders.toString(),
                      plusDelivery,
                    ),
                  );
                  toggleOverlay();
                }}>
                <Text style={style.btn}>Checkout</Text>
              </TouchableOpacity>
            </View>
            <View style={style.totalNum}>
              <Text style={style.text}>Rp. {totalPrice}</Text>
              <Text style={style.text}>Rp. 15000</Text>
              <Text style={style.total}>Rp. {plusDelivery}</Text>
            </View>
          </View>
        ) : menu.isPending ? (
          <View style={style.wait}>
            <Text>Please wait...</Text>
            <ActivityIndicator color="black" size="large" />
          </View>
        ) : (
          <View style={style.empty}>
            <Image source={img} style={style.imgEmpty} />
            <Text style={{marginTop: 2, marginBottom: 10}}>
              Oops!, your cart is empty
            </Text>
            <Button
              title="Choose your menu"
              color="#48C9B0"
              onPress={() => navigation.navigate('home')}
              style={style.emptyBtn}
            />
          </View>
        )}
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text style={{textAlign: 'center'}}>Order Success</Text>
          <View style={style.btn2}>
            <TouchableOpacity
              onPress={() => {
                toggleOverlay();
                navigation.navigate('home');
              }}
              style={style.yes}>
              <Text style={style.str}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default Cart;
