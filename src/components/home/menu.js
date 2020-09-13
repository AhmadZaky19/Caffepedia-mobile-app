import React, {Fragment} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Card, CardItem} from 'native-base';
// import {useSelector, useDispatch} from 'react-redux';
// import {addToCartCreator, plusQtyCreator} from '../../redux/actions/action';

const ListMenu = ({navigation}) => {
  const listMenu = useSelector((state) => state.menu.data);
  const listCarts = useSelector((state) => state.cart.data);

  const dispatch = useDispatch();

  const addToCart = (id, name, price, img) => {
    const index = listCarts.findIndex((item) => {
      return item.id_product === id;
    });

    if (index >= 0) {
      dispatch(plusQtyCreator(index));
    } else {
      const newCart = {
        id_product: id,
        name_product: name,
        qty: 1,
        price_product: price,
        img_product: img,
      };
      dispatch(addToCartCreator(newCart));
    }
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
          {listMenu.length ? (
            <Fragment>
              {listMenu.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id_product}
                    onPress={() => {
                      addToCart(
                        item.id_product,
                        item.name_product,
                        item.price_product,
                        item.img_product,
                      );
                      navigation.navigate('Orders');
                    }}>
                    <Card style={{width: 150}}>
                      <CardItem cardBody>
                        <Image
                          source={{
                            uri: item.img_product,
                          }}
                          style={{height: 100, width: null, flex: 1}}
                        />
                      </CardItem>
                      <CardItem style={{justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>
                          {item.name_product}
                        </Text>
                      </CardItem>
                      <CardItem
                        style={{justifyContent: 'center', marginTop: -15}}>
                        <Text style={{fontWeight: 'bold'}}>
                          Rp. {item.price_product}
                        </Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </Fragment>
          ) : (
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
              Loading...
            </Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ListMenu;
