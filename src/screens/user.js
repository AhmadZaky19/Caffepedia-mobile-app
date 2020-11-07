import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {logoutCreator, getDataUserCreator} from '../redux/actions/auth';
import {cancelCartCreator} from '../redux/actions/menu';
import {Overlay} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import OrderHistory from './orderHistory';
import EditProfile from './editProfile';
import style from '../style/user';
import user from '../image/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from 'react-native-vector-icons/AntDesign';

const UserProfile = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const [visible, setVisible] = useState(false);
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const id = () => {
    if (auth.data !== null) {
      return auth.data.id;
    } else {
      return null;
    }
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (logout) {
      dispatch(logoutCreator());
      dispatch(cancelCartCreator());
      setLogout(false);
      navigation.navigate('auth');
    }
  }, [dispatch, logout, navigation]);
  useEffect(() => {
    dispatch(getDataUserCreator(id()));
  }, [dispatch]);
  const handleLogout = () => {
    console.log('wkwk');
    setLogout(true);
    console.log(logout);
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.header}>
        <View style={style.photo}>
          {auth.dataUser === null ? (
            <Image source={user} style={style.userImg} />
          ) : auth.dataUser[0].picture === null ? (
            <Image source={user} style={style.userImg} />
          ) : (
            <Image
              source={{uri: auth.dataUser[0].picture}}
              style={style.userImg}
            />
          )}
        </View>
        {auth.dataUser === null ? null : (
          <Text style={style.name}>{auth.dataUser[0].username}</Text>
        )}
      </View>
      <TouchableOpacity
        style={style.list}
        onPress={() => navigation.navigate('orderhistory')}>
        <Icon name="table" size={25} />
        <Text style={style.listText}>Order History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => navigation.navigate('editprofile')}>
        <Icon name="edit" size={25} />
        <Text style={style.listText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          toggleOverlay();
        }}>
        <Logout name="logout" size={25} />
        <Text style={style.listText}>Logout</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={style.promp}>
        <View style={style.overlayCont}>
          <Text>Logout ?</Text>
          <View style={style.btn}>
            <TouchableOpacity
              onPress={() => {
                handleLogout();
                toggleOverlay();
              }}
              style={style.yes}>
              <Text style={style.str}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.no} onPress={() => toggleOverlay()}>
              <Text style={style.strno}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const User = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="orderhistory"
        component={OrderHistory}
        options={{
          headerTitle: 'Order History',
        }}
      />
      <Stack.Screen
        name="editprofile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit your profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default User;
