import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {authLoginCreator} from '../redux/actions/action';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLogin);
  const auth = useSelector((state) => state.auth.data);

  const [form, setForm] = useState({email: null, password: null});

  const handleSubmit = () => {
    dispatch(authLoginCreator(form.email, form.password));
  };

  useEffect(() => {
    if (login) {
      return navigation.navigate('home');
    }
  }, [auth]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Login</Text>
      <View style={{marginTop: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="Username"
            name="email"
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
            onChangeText={(Text) => setForm({...form, email: Text})}
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
            onChangeText={(Text) => setForm({...form, password: Text})}
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
              LOGIN
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Text style={{fontSize: 16}}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{fontSize: 16, fontWeight: 'bold', color: '#4abdac'}}
            onPress={() => navigation.navigate('register')}>
            {' '}
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;