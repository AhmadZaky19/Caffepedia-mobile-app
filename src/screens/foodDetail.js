/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMenuCreator,
  addCartCreator,
  deleteMenuCreator,
  editMenuCreator,
} from '../redux/actions/menu';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import Order from '../components/order';
import style from '../style/foodDetail';
import Icon from 'react-native-vector-icons/AntDesign';
import imgTop from '../image/allFood.webp';

const DetailFood = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuCreator());
  }, [dispatch]);
  const {menu, auth} = useSelector((state) => state);
  const food = menu.data.filter((item) => {
    return item.name_category === menu.nameCategory.name_category;
  });

  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(id);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={style.container}>
      <View style={style.top}>
        <Image source={imgTop} style={style.topImg} />
      </View>
      <ScrollView style={style.listCont} showsVerticalScrollIndicator={false}>
        {food.length ? (
          food.map((item, index) => {
            return (
              <View press style={style.list} key={index}>
                <Image source={{uri: item.picture}} style={style.listPic} />
                <View style={style.desc}>
                  <Text>{item.name}</Text>
                  <Text>Rp. {item.price}</Text>
                </View>
                {auth.isAdmin ? (
                  <View style={style.editDel}>
                    <TouchableOpacity
                      style={style.cartAdmin}
                      onPress={() => {
                        dispatch(
                          editMenuCreator(
                            item.id_menu,
                            item.name,
                            item.price,
                            item.picture,
                            item.name_category,
                            item.id_category,
                          ),
                        );
                        navigation.navigate('edit');
                      }}>
                      <Icon name="edit" size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.cartAdmin}
                      onPress={() => {
                        setId(item.id_menu);
                        console.log(id);
                        toggleOverlay();
                      }}>
                      <Icon name="delete" size={16} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={style.cart}
                    onPress={() => {
                      dispatch(
                        addCartCreator(
                          item.id_menu,
                          item.name,
                          item.price,
                          item.picture,
                        ),
                      );
                    }}>
                    <Text style={style.cartText}>Add +</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })
        ) : (
          <View style={style.empty}>
            <Text>Menu is not available</Text>
          </View>
        )}
      </ScrollView>
      {auth.isAdmin === false ? (
        menu.cart.length ? (
          <Order navigation={navigation} />
        ) : null
      ) : null}

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text>Delete ?</Text>
          <View style={style.btn}>
            <TouchableOpacity
              onPress={() => {
                dispatch(deleteMenuCreator(id));
                dispatch(getMenuCreator());
                toggleOverlay();
              }}
              style={style.yes}>
              <Text style={style.str}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.no} onPress={() => toggleOverlay()}>
              <Text style={style.strno}>no</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default DetailFood;
