import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Thumbnail, Button} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import {logoutCreator, getDataUserCreator} from '../redux/actions/action';

// import BottomNav from '../components/customer/bottomNav';

const User = ({navigation}) => {
  const auth = useSelector((state) => state.auth.data.data);
  const dataUser = useSelector((state) => state.auth.dataUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUserCreator(auth.id_user));
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
        {dataUser[0].image ? (
          <Image
            source={{uri: dataUser[0].image}}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: 'absolute',
              bottom: -70,
            }}
          />
        ) : (
          <Image
            source={require('../assets/images/userImage.png')}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: 'absolute',
              bottom: -70,
            }}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{marginTop: 80, fontWeight: 'bold', fontSize: 20}}>
          {dataUser[0].username}
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="user-edit" color={'#4abdac'} size={35} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#4abdac',
                paddingRight: 15,
              }}>
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="clipboard-list" color={'#4abdac'} size={35} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#4abdac',
                paddingLeft: 15,
              }}>
              History
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
        <TouchableOpacity>
          <Button
            rounded
            block
            danger
            onPress={() => {
              toggleModal();
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              LOGOUT
            </Text>
          </Button>
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
            }}>
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
                    success
                    onPress={() => {
                      dispatch(logoutCreator());
                      navigation.navigate('login');
                      toggleModal();
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Yes
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
                    onPress={toggleModal}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>No</Text>
                  </Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default User;
