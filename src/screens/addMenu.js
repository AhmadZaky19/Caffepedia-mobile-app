import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {Overlay} from 'react-native-elements';
import Axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import style from '../style/addMenu';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';

const AddMenu = () => {
  // state
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [id_category, setidCategory] = useState(null);
  const [catName, setCatName] = useState(null);
  const [status, setStatus] = useState(128);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  // to handle photo from localStorage
  const alert = () => {
    Alert.alert(
      'File Too Large',
      '',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  const handleChoose = () => {
    const options = {
      title: 'select-picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: true,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('dicancel');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        if (response.fileSize > 200000) {
          setImage(null);
          alert();
        } else {
          setImage(source);
        }
      }
    });
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleSuccess = () => {
    setLoadingVisible(!loadingVisible);
  };

  const handleSubmit = () => {
    if (
      name === null ||
      image === null ||
      price === null ||
      id_category === null
    ) {
      toggleOverlay();
    } else {
      let data = new FormData();
      data.append('name', name);
      data.append('image', {
        uri: `file://${image.path}`,
        type: image.type,
        name: image.fileName,
        size: image.fileSize,
      });
      data.append('price', price);
      data.append('id_category', id_category);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          contentType: false,
          mimeType: 'multipart/form-data',
          'cache-control': 'no-cache',
          accept: 'application/json',
        },
      };
      const url = 'http://192.168.1.5:8000/';
      Axios.post(url, data, config)
        .then((res) => {
          console.log(res);
          setStatus(res.status);
          console.log(res.status);
          setTimeout(() => setStatus(null), 2000);
        })
        .catch((err) => {
          console.log(err);
        });
      setCatName(null);
      setImage(null);
      setName(null);
      setPrice(null);
      setLoading(true);
    }
  };
  if (status === 200) {
    setLoading(false);
    console.log('done');
    setStatus(128);
  }

  return (
    <>
      {status === 200 ? toggleSuccess() : null}
      <ScrollView style={style.container}>
        {loading ? (
          <ActivityIndicator size="large" color="black" style={style.loading} />
        ) : null}

        <View style={style.header}>
          <View style={style.logoName}>
            <View style={style.logo}>
              <Fork name="food-fork-drink" size={15} color="black" />
            </View>
            <Text style={style.brandName}>Cafepedia</Text>
          </View>
        </View>
        <View style={style.title}>
          <Text style={style.titleText}>Add Menu</Text>
        </View>
        <View style={style.form}>
          <View style={style.imgPicker}>
            <TouchableOpacity
              style={style.pick}
              onPress={() => {
                handleChoose();
              }}>
              {image === null ? (
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  Select picture{' '}
                </Text>
              ) : (
                <Text style={{fontWeight: 'bold', color: 'black'}}>Change</Text>
              )}
            </TouchableOpacity>
            <Image source={image} style={style.pic} />
          </View>
          <Input
            placeholder="name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Input
            placeholder="price"
            keyboardType="numeric"
            onChangeText={(num) => setPrice(num)}
            value={price}
          />
          <View style={style.catName}>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Category</Text>
            <Text style={{fontWeight: 'bold', marginLeft: 30, fontSize: 18}}>
              {catName}
            </Text>
            {catName === null ? null : <Fork name="check" />}
          </View>
          <View style={style.category}>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Drink');
                setidCategory('1');
              }}>
              <Text style={{color: 'black'}}>Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Food');
                setidCategory('2');
              }}>
              <Text style={{color: 'black'}}>Food</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.addBtn}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={style.add}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text>All field cannot be empty</Text>
          <View style={style.btn}>
            <TouchableOpacity
              onPress={() => {
                toggleOverlay();
              }}
              style={style.yes}>
              <Text style={style.str}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Overlay
        isVisible={loadingVisible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text>Add Menu Success</Text>
          <View style={style.btn}>
            <TouchableOpacity
              onPress={() => {
                toggleSuccess();
              }}
              style={style.yes}>
              <Text style={style.str}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </>
  );
};

export default AddMenu;
