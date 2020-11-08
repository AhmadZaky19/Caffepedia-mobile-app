import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Overlay} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {editDataCreator, getMenuCreator} from '../redux/actions/menu';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import style from '../style/edit';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';

const Edit = ({navigation}) => {
  const {menu} = useSelector((state) => state);
  const dispatch = useDispatch();
  // state

  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [id_category, setidCategory] = useState(null);
  const [catName, setCatName] = useState(menu.editData.name_category);
  const [press, setPress] = useState(false);
  const [visible, setVisible] = useState(false);

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
        setPress(false);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        if (response.fileSize > 200000) {
          alert();
        } else {
          setPicture(source);
        }
      }
    });
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      {menu.pendingEdit === null ? null : menu.pendingEdit ? (
        <ActivityIndicator size="large" color="#EB5323" style={style.loading} />
      ) : null}
      <ScrollView style={style.container}>
        <View style={style.title}>
          <TouchableOpacity
            style={style.goBack}
            onPress={() => {
              dispatch(getMenuCreator());
              navigation.navigate('home');
            }}>
            <Icon name="arrowleft" color="white" size={25} />
          </TouchableOpacity>
          <Text style={style.titleText}>Edit your menu</Text>
        </View>
        <View style={style.form}>
          <View style={style.imgPicker}>
            {press ? (
              <Image source={picture} style={style.pic} />
            ) : (
              <Image source={{uri: menu.editData.picture}} style={style.pic} />
            )}
            <Icon
              name="edit"
              size={25}
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setPress(true);
                handleChoose();
              }}
            />
          </View>
          <Input
            placeholder="name"
            onChangeText={(text) => setName(text)}
            defaultValue={menu.editData.name}
          />
          <Input
            placeholder="price"
            keyboardType="number-pad"
            onChangeText={(num) => setPrice(num)}
            defaultValue={menu.editData.price.toString()}
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
              if (
                name === null &&
                picture === null &&
                price === null &&
                id_category === null
              ) {
                toggleOverlay();
              } else {
                dispatch(
                  editDataCreator(
                    name,
                    picture,
                    price,
                    id_category,
                    menu.editData.id_menu,
                  ),
                );
              }
            }}>
            <Text style={style.add}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text style={{textAlign: 'center'}}>
            fill which data you will update
          </Text>
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
    </>
  );
};

export default Edit;
