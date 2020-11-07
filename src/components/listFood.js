import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listByCategoryCreator} from '../redux/actions/menu';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from '../style/home';
import img from '../image/All.jpg';

const ListFood = ({navigation}) => {
  const dispatch = useDispatch();
  const {menu} = useSelector((state) => state);
  return (
    <>
      <TouchableOpacity style={style.listFood}>
        {menu.category.length ? (
          <TouchableOpacity
            style={style.food}
            onPress={() => navigation.navigate('flatlist')}>
            <Image source={img} style={style.foodImg} />
            <Text style={style.nameFood}>All Menu</Text>
          </TouchableOpacity>
        ) : null}

        {menu.isPending ? (
          <View style={style.loading}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : menu.category.length ? (
          menu.category.map((item, index) => {
            <TouchableOpacity
              style={style.food}
              onPress={() => {
                navigation.navigate('FoodDetail');
              }}>
              <Image
                source={{uri: item.image_category}}
                style={style.foodImg}
              />
              <Text style={style.nameFood}>{item.name_category}</Text>
            </TouchableOpacity>;
            return (
              <TouchableOpacity
                key={index}
                style={style.food}
                onPress={() => {
                  dispatch(listByCategoryCreator(item.name_category));
                  navigation.navigate('FoodDetail');
                }}>
                <Image
                  source={{uri: item.image_category}}
                  style={style.foodImg}
                />
                <Text style={style.nameFood}>{item.name_category}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>Something Went Wrong</Text>
        )}
      </TouchableOpacity>
    </>
  );
};
export default ListFood;
