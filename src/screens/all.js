import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {
  getMenuAllCreator,
  editMenuCreator,
  addCartCreator,
  deleteMenuCreator,
  getMoreCreator,
} from '../redux/actions/menu';
import Order from '../components/order';
import Icon from 'react-native-vector-icons/AntDesign';
import imgHeader from '../image/allFood.webp';

const AllFlatList = ({navigation}) => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuAllCreator());
  }, [dispatch]);
  // overlay
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(id);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const data = useSelector((state) => state.menu.dataAll);
  const {auth} = useSelector((state) => state);
  const pageInfo = useSelector((state) => state.menu.pageInfo);
  const cart = useSelector((state) => state.menu.cart);
  console.log(pageInfo.nextPage);

  const getMoreMenu = () => {
    if (pageInfo.nextPage !== '') {
      setPage(page + 1);
      dispatch(getMoreCreator(page));
    }
  };

  const renderRow = ({item}) => {
    return (
      <View press style={style.list}>
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
  };

  const renderFooter = () => {
    if (pageInfo.nextPage !== '') {
      return (
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <Image source={imgHeader} style={style.imgHeader} />
        </View>
        {data.length ? (
          <FlatList
            style={style.flatList}
            data={data}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={getMoreMenu}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        ) : (
          <Text style={style.emptymenu}>Menu is unavailable now</Text>
        )}

        {auth.isAdmin === false ? (
          cart.length ? (
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
                  dispatch(getMenuAllCreator());
                  toggleOverlay();
                }}
                style={style.yes}>
                <Text style={style.str}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.no}
                onPress={() => toggleOverlay()}>
                <Text style={style.strno}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
      </View>
    </>
  );
};
export default AllFlatList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 20,
  },
  header: {
    height: 110,
    backgroundColor: 'red',
  },
  imgHeader: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  flatList: {
    paddingTop: 0,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  itemRow: {
    height: 100,
    backgroundColor: 'pink',
    borderBottomColor: '#ccc',
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  itemPic: {
    height: '100%',
    width: '20%',
  },
  top: {
    width: '100%',
    height: '20%',
    backgroundColor: 'red',
  },
  topImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  listCont: {
    alignSelf: 'center',
    width: '95%',
    marginTop: 10,
    backgroundColor: '#EAF2F8',
  },
  list: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    height: 110,
    borderWidth: 0.3,
    borderColor: '#EAEDED',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 1,
    borderRadius: 10,
  },
  listPic: {
    height: '100%',
    width: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  desc: {
    alignSelf: 'flex-start',
    width: '35%',
  },
  editDel: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  cart: {
    marginRight: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#7DCEA0',
    borderRadius: 8,
    padding: 8,
  },
  cartAdmin: {
    marginRight: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#7DCEA0',
    borderRadius: 8,
    padding: 8,
  },
  cartActive: {
    alignSelf: 'flex-end',
    backgroundColor: '#99A3A4',
    borderRadius: 8,
    padding: 8,
  },
  cartText: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
  },
  empty: {
    marginTop: 40,
    alignItems: 'center',
  },
  promp: {
    width: '70%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  overlayCont: {
    top: -10,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    flexDirection: 'row',
  },
  yes: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: 'black',
  },
  no: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: '#CACFD2',
  },
  str: {
    color: 'white',
    fontWeight: 'bold',
  },
  strno: {
    color: 'black',
    fontWeight: 'bold',
  },
});
