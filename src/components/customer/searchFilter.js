import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'native-base';
import {Picker} from '@react-native-community/picker';

import {searchProductCreator, filterProductCreator} from '../../redux/actions/action';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Modal from 'react-native-modal';

const SearchFilter = ({navigation}) => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(1);
  const filterProducts = useSelector((state) => state.product.filterProduct);

  const filterProduct = () => {
    let data = null;
    switch (filter) {
      case 1:
        data = {
          by: 'price_product',
          order: 'desc',
        };
        break;
      case 2:
        data = {
          by: 'price_product',
          order: 'asc',
        };
        break;
      case 3:
        data = {
          by: 'price_product',
          order: 'asc',
        };
        break;
      case 4:
        data = {
          by: 'id_product',
          order: 'asc',
        };
        break;
      default:
        data = {
          by: 'id_product',
          order: 'desc',
        };
        break;
    }

    dispatch(filterProductCreator(data.by, data.order));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: '#4abdac',
        }}>
        <View style={{width: 50, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeApp');
            }}
            style={{
              marginLeft: 5,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={{width: 25, height: 25, position: 'absolute', left: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative', flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="What i want ?"
            style={{
              borderWidth: 1,
              borderColor: '#003333',
              borderRadius: 25,
              fontSize: 16,
              paddingLeft: 50,
              paddingRight: 25,
            }}
            onChangeText={(Text) => setproduct(Text)}
            onSubmitEditing={() => {
              dispatch(searchProductCreator(product, 'name_product'));
              setproduct(null);
            }}
          />
          <Image
            source={require('../../assets/icons/search.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15,
              top: 12,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            paddingHorizontal: 15,
          }}>
          <TouchableOpacity onPress={toggleModal}>
            <Icon name="filter" size={25} />
          </TouchableOpacity>
        </View>
      </View>
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
            }}>
            <Text style={{fontSize: 20, marginBottom: 12}}>Filter Menu</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#4abdac',
                }}>
                <Picker
                  selectedValue={filter}
                  style={{height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) => {
                    setFilter(itemValue);
                  }}>
                  <Picker.Item label="Highest Price" value={1} />
                  <Picker.Item label="Lowest Price" value={2} />
                  <Picker.Item label="New Menu" value={3} />
                  <Picker.Item label="Old Menu" value={4} />
                </Picker>
              </View>
              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <View style={{paddingHorizontal: 5}}>
                  <TouchableOpacity>
                    <Button
                      style={{width: 100}}
                      block
                      rounded
                      success
                      onPress={() => {
                        filterProduct();
                        toggleModal();
                      }}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        Filter
                      </Text>
                    </Button>
                  </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 5}}>
                  <TouchableOpacity>
                    <Button
                      style={{width: 100}}
                      block
                      rounded
                      danger
                      onPress={toggleModal}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        Cancel
                      </Text>
                    </Button>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default SearchFilter;
