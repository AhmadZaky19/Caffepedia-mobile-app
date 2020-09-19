import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import {Form, Label, Item, Input, Button} from 'native-base';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {getAllProductCreator} from '../redux/actions/action';

const AddProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setform] = useState({
    nameProduct: null,
    priceProduct: null,
    category: 2,
    image: null,
  });

  const chooseImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('dicancel');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        setform({...form, image: source});
      }
    });
  };

  const addProduct = () => {
    let formData = new FormData();
    formData.append('name_product', form.nameProduct);
    formData.append('price_product', form.priceProduct);
    formData.append('category_id', form.category);
    formData.append('image', {
      uri: `file://${form.image.path}`,
      type: form.image.type,
      name: form.image.fileName,
      size: form.image.fileSize,
    });

    const configHeader = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };

    const URL = `http://192.168.1.5:8000/addproduct`;
    Axios.post(URL, formData, configHeader)
      .then((res) => {
        setform({
          nameProduct: null,
          priceProduct: null,
          category: 2,
          image: null,
        });
        dispatch(getAllProductCreator());
        navigation.navigate('homeAdmin');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              backgroundColor: '#4abdac',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('homeAdmin');
              }}
              style={{position: 'relative', marginLeft: 10, flex: 1}}>
              <Image
                source={require('../assets/icons/back.png')}
                style={{width: 25, height: 25, position: 'absolute', left: 10}}
              />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Add Product</Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Form>
              <Item stackedLabel>
                <Label style={{fontWeight: 'bold'}}>Name Product</Label>
                <Input
                  value={form.nameProduct}
                  onChangeText={(Text) => setform({...form, nameProduct: Text})}
                />
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight: 'bold'}}>Price Product</Label>
                <Input
                  value={form.priceProduct}
                  onChangeText={(Text) =>
                    setform({...form, priceProduct: Text})
                  }
                />
              </Item>

              <Item stackedLabel>
                <Label style={{fontWeight: 'bold'}}>Category</Label>
                <Picker
                  selectedValue={form.category}
                  style={{height: 50, width: 390}}
                  onValueChange={(itemValue, itemIndex) => {
                    console.log(itemValue);
                    console.log(itemIndex);
                    setform({...form, category: itemValue});
                  }}>
                  <Picker.Item label="Food" value="2" />
                  <Picker.Item label="Drink" value="1" />
                </Picker>
              </Item>
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Button
                    block
                    primary
                    style={{width: 100}}
                    onPress={() => chooseImage()}>
                    <Text style={{color: 'white'}}>Select Picture</Text>
                  </Button>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  {form.image ? (
                    <Image
                      source={form.image}
                      style={{width: 150, height: 100, marginTop: 100}}
                    />
                  ) : (
                    <Text
                      style={{fontWeight: 'bold', fontSize: 20, marginTop: 35}}>
                      No Image
                    </Text>
                  )}
                </View>
              </View>
              <View style={{flex: 1, marginTop: 100, paddingHorizontal: 25}}>
                <Button block rounded success onPress={() => addProduct()}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    Add Data
                  </Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddProduct;