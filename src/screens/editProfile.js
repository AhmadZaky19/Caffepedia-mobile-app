import React, {Fragment, useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import {Form, Label, Item, Input, Button} from 'native-base';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getAllProductCreator, getDataUserCreator} from '../redux/actions/action';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const authProfile = useSelector((state) => state.auth.dataUser[0]);
  console.log(authProfile);
  const [form, setform] = useState({
    nameUser: authProfile.username,
    image: authProfile.image,
    id_user: authProfile.id_user,
  });

  const chooseImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        setform({...form, image: authProfile.image});
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

  const updateUser = () => {
    let formData = new FormData();
    formData.append('username', form.nameUser);
    formData.append('id_user', parseInt(form.id_user));
    if (form.image.type) {
      formData.append('image', {
        uri: `file://${form.image.path}`,
        type: form.image.type,
        name: form.image.fileName,
        size: form.image.fileSize,
      });
    }

    const configHeader = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };

    const URL = `http://192.168.1.5:8000/auth/edit`;
    Axios.patch(URL, formData, configHeader)
      .then((res) => {
        console.log('response', res);
        setform({
          nameUser: null,
          image: null,
          id_user: null,
        });
        dispatch(getDataUserCreator(form.id_user));
        navigation.navigate('Account');
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
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Edit Profile
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Form>
              <Item stackedLabel>
                <Label style={{fontWeight: 'bold'}}>Name</Label>
                <Input
                  value={form.nameUser}
                  onChangeText={(Text) => setform({...form, nameUser: Text})}
                />
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
                    form.image.type ? (
                      <Image
                        source={form.image}
                        style={{width: 150, height: 100, marginTop: 100}}
                      />
                    ) : (
                      <Image
                        source={{uri: form.image}}
                        style={{width: 150, height: 100, marginTop: 100}}
                      />
                    )
                  ) : (
                    <Text
                      style={{fontWeight: 'bold', fontSize: 20, marginTop: 35}}>
                      No Image
                    </Text>
                  )}
                </View>
              </View>
              <View style={{flex: 1, marginTop: 100, paddingHorizontal: 25}}>
                <Button block rounded success onPress={() => updateUser()}>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>
                    Update Data User
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

export default EditProfile;