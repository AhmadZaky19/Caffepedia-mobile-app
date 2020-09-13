import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Thumbnail, Button} from 'native-base';
import {useDispatch} from 'react-redux';

import {logoutCreator} from '../redux/actions/action';

import BottomNav from '../components/home/bottomNav';

const User = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#4abdac',
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          position: 'relative',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Thumbnail
          source={require('../assets/images/userImage.png')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            position: 'absolute',
            bottom: -70,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
        }}>
        <Text style={{marginTop: 80, fontWeight: 'bold', fontSize: 20}}>
          Ahmad Zaky
        </Text>
      </View>
      <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
        <TouchableOpacity>
          <Button
            rounded
            block
            danger
            onPress={() => {
              dispatch(logoutCreator());
              navigation.navigate('login');
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              LOGOUT
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default User;