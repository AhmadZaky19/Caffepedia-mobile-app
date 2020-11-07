import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileCreator, getDataUserCreator} from '../redux/actions/auth';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../style/editProfile';
import imgPlaceHolder from '../image/user.png';

const EditProfile = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [image, setImage] = useState(null);

  const [press, setPress] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

  console.log(username, image);

  const {auth} = useSelector((state) => state);

  const id = () => {
    if (auth.data !== null) {
      return auth.data.id;
    } else {
      return null;
    }
  };

  useEffect(() => {
    dispatch(getDataUserCreator(id()));
  }, [dispatch]);

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
        if (response.fileSize > 300000) {
          setImage(null);
          alert();
        } else {
          setImage(source);
        }
      }
    });
  };

  return (
    <ScrollView style={style.container}>
      {loading ? (
        <ActivityIndicator size="large" color="black" style={style.loading} />
      ) : null}
      <View style={style.top}>
        <View style={style.image}>
          {!auth.dataUser.length ? (
            <Image source={imgPlaceHolder} style={style.userImg} />
          ) : auth.dataUser[0].picture === null ? (
            <Image source={imgPlaceHolder} style={style.userImg} />
          ) : press ? (
            <Image source={image} style={style.userImg} />
          ) : (
            <Image
              source={{uri: auth.dataUser[0].picture}}
              style={style.userImg}
            />
          )}
          <TouchableOpacity
            style={style.edit}
            onPress={() => {
              console.log('tes');
              setPress(true);
              handleChoose();
            }}>
            <Icon name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.form}>
        <Input
          placeholder="username"
          leftIcon={{type: 'font-awesome', name: 'user'}}
          containerStyle={style.input}
          onChangeText={(text) => setUsername(text)}
          defaultValue={auth.dataUser.length ? auth.dataUser[0].username : null}
        />
      </View>
      <TouchableOpacity
        style={style.btn}
        onPress={() => {
          if (username === null && image === null) {
            return null;
          } else {
            setLoading(true);
            dispatch(updateProfileCreator(username, image, id()));
            setTimeout(() => {
              dispatch(getDataUserCreator(id()));
              setLoading(false);
              toggleOverlay();
            }, 10000);
          }
        }}>
        <Text style={style.save}>Save</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text style={{textAlign: 'center'}}>Update Success</Text>
          <View style={style.btn2}>
            <TouchableOpacity
              onPress={() => {
                toggleOverlay();
                setUsername(null);
              }}
              style={style.yes}>
              <Text style={style.str}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </ScrollView>
  );
};
export default EditProfile;
