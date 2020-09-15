import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {authRegisterCreator} from '../redux/actions/action';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLogin);
  const auth = useSelector((state) => state.auth.data);
  const [form, setform] = useState({name: null, email: null, password: null});

  const handleSubmit = () => {
    dispatch(authRegisterCreator(form.name, form.email, form.password));
  };

  useEffect(() => {
    if (login) {
      return navigation.navigate('home');
    }
  }, [auth]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Register</Text>
      <View style={{marginTop: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="Username"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, name: Text})}
          />
        </View>
        <View style={{position: 'relative', marginTop: 20}}>
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, email: Text})}
          />
        </View>
        <View style={{position: 'relative', marginTop: 20}}>
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              backgroundColor: 'white',
              width: 350,
              fontSize: 18,
              paddingLeft: 50,
              paddingRight: 20,
            }}
            onChangeText={(Text) => setform({...form, password: Text})}
          />
        </View>
      </View>
      <View style={{width: 350, marginTop: 25}}>
        <TouchableOpacity>
          <Button
            block
            rounded
            style={{backgroundColor: '#90ee90'}}
            onPress={handleSubmit}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Register Account
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Text style={{fontSize: 16}}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: '#4abdac'}}
            onPress={() => navigation.navigate('login')}>
            {' '}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;