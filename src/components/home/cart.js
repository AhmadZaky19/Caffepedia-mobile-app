import React, {Fragment} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import {Button} from 'native-base';
import {useSelector} from 'react-redux';

const Cart = () => {
  const listCart = useSelector((state) => state.cart.data);
  console.log(listCart);
  return (
    <>
      <View style={{marginTop: 30, flex: 1}}>
        {listCart.length ? (
          <Fragment>
            <View style={{flex: 1}}>
              {listCart.map((item) => {
                return (
                  <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <Image
                      source={{
                        uri: item.img_product,
                      }}
                      style={{
                        width: 100,
                        height: 80,
                        flex: 1,
                        marginHorizontal: 10,
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={require('../../assets/icons/minus.png')}
                        style={{width: 25, height: 25}}
                      />
                      <View
                        style={{
                          borderBottomWidth: 1,
                          borderColor: 'green',
                          textDecorationLine: 'underLine',
                          paddingHorizontal: 5,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            width: 50,
                            textAlign: 'center',
                            fontSize: 20,
                          }}>
                          {item.qty}
                        </Text>
                      </View>
                      <Image
                        source={require('../../assets/icons/plus.png')}
                        style={{width: 25, height: 25}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Rp. {item.price_product}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                height: 80,
                borderTopWidth: 1,
                borderColor: '#e8e8e8',
                flexDirection: 'row',
              }}>
              <View style={{justifyContent: 'center', flex: 1, marginLeft: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Total Harga
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'orange'}}>
                  Rp. 20.000
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'flex-end',
                  marginRight: 20,
                }}>
                <Button block rounded success>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                    Beli 3
                  </Text>
                </Button>
              </View>
            </View>
          </Fragment>
        ) : (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              No list cart !
            </Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Cart;
