import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMoreProductCreator,
  getAllProductCreator,
  dataEditProductCreator,
} from '../../redux/actions/action';
import Modal from 'react-native-modal';

const ListProductAdmin = ({navigation}) => {
  const listProduct = useSelector((state) => state.product.data);

  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({
    id_product: null,
    nameProduct: null,
    priceProduct: null,
    category: null,
    imgProduct: null,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductCreator());
  }, []);

  const getMoreProduct = () => {
    setPage(page + 1);
    dispatch(getMoreProductCreator(page));
  };

  const deleteProduct = () => {
    const URI = `http://192.168.43.116:8000/deleteproduct/${product.id_product}`;
    return Axios.delete(URI).then((res) => {
      dispatch(getAllProductCreator());
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
            setProduct({
              id_product: item.id_product,
              nameProduct: item.name_product,
              priceProduct: item.price_product,
              category: item.category_id,
              imgProduct: item.image,
            });
          }}>
          <Card style={{width: 180}}>
            <CardItem cardBody>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{height: 100, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>{item.name_product}</Text>
            </CardItem>
            <CardItem style={{justifyContent: 'center', marginTop: -15}}>
              <Text style={{fontWeight: 'bold'}}>Rp. {item.price_product}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#4abdac" />
      </View>
    );
  };

  return (
    <>
      {listProduct === undefined ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Menu Not Found!
          </Text>
        </View>
      ) : listProduct.length ? (
        <SafeAreaView>
          <FlatList
            numColumns={2}
            data={listProduct}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_product}
            onEndReached={getMoreProduct}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </SafeAreaView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Loading Data ...
          </Text>
        </View>
      )}
      <View>
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInLeft"
          animationOut="slideOutRight">
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}>
            <Button
              rounded
              style={{
                width: 45,
                position: 'absolute',
                top: -15,
                right: -15,
                backgroundColor: 'white',
              }}
              onPress={() => toggleModal()}>
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: 'center',
                  marginLeft: 15,
                }}>
                X
              </Text>
            </Button>
            <Text style={{fontSize: 20, marginBottom: 12}}>
              Logout ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    warning
                    onPress={() => {
                      dispatch(dataEditProductCreator(product));
                      toggleModal();
                      navigation.navigate('editProduct');
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Edit
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <TouchableOpacity>
                  <Button
                    style={{width: 100}}
                    block
                    rounded
                    danger
                    onPress={() => {
                      deleteProduct();
                      toggleModal();
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Delete
                    </Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ListProductAdmin;