import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Overlay} from 'react-native-elements';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
  addCartCreator,
  searchMenuCreator,
  clearCreator,
  deleteMenuCreator,
} from '../redux/actions/menu';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Order from '../components/order';
import style from '../style/search';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const {menu, auth} = useSelector((state) => state);
  console.log(menu);

  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(id);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.topTab}>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearCreator());
              navigation.goBack();
            }}>
            <Icon name="md-arrow-back" size={25} style={style.icon} />
          </TouchableOpacity>
          <Text style={style.text}>Search</Text>
        </View>
        <View style={style.searchBar}>
          <Icon name="search" size={18} />
          <TextInput
            placeholder="search your food"
            style={style.search}
            autoFocus={true}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              dispatch(searchMenuCreator(name));
            }}
          />
        </View>
        <ScrollView style={style.listCont}>
          {menu.isPending ? (
            <View>
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : menu.dataSearch.msg === undefined ? (
            menu.dataSearch.map((item, index) => {
              return (
                <View
                  press
                  style={style.list}
                  key={index}
                  onPress={() =>
                    dispatch(
                      addCartCreator(
                        item.id_menu,
                        item.name,
                        item.price,
                        item.picture,
                      ),
                    )
                  }>
                  <Image source={{uri: item.picture}} style={style.listPic} />
                  <View style={style.desc}>
                    <Text>{item.name}</Text>
                    <Text>Rp. {item.price}</Text>
                  </View>
                  {auth.isAdmin ? (
                    <View style={style.editDel}>
                      <TouchableOpacity style={style.cartAdmin}>
                        <Icon2 name="edit" size={16} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={style.cartAdmin}
                        onPress={() => {
                          setId(item.id_menu);
                          console.log(id);
                          toggleOverlay();
                        }}>
                        <Icon2 name="delete" size={16} />
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
      </View>
      {menu.cart.length ? <Order navigation={navigation} /> : null}
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
                dispatch(searchMenuCreator(name));
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
    </>
  );
};

export default Search;
