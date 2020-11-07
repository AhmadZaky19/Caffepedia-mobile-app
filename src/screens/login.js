/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loginCreator} from '../redux/actions/auth';
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import style from '../style/login';
import background from '../image/tiramisu.jpg';

const Login = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState(null);

  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();

  if (auth.isLogin) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'bottomtab',
        },
      ],
    });
  }

  const handleSubmit = () => {
    if (user === null || password === null) {
      setMsg('username or password cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    } else if (user === '' || password === '') {
      setMsg(' username or password cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    } else {
      setMsg(null);
      console.log('login');
      dispatch(loginCreator(user, password));
      if (auth.isLogin === false) {
        setPassword(null);
        setUser(null);
        setMsg(auth.data);
      }
    }
  };

  useEffect(() => {
    if (auth.isLogin) {
      setPassword(null);
      setUser(null);
      setMsg(null);
      return navigation.navigate('bottomtab');
    } else if (auth.isLogin === false) {
      setMsg(auth.data);
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    }
  }, [auth]);

  return (
    <>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={background} style={style.image}>
          <View style={style.content}>
            <View style={style.form}>
              <View style={style.logo}>
                <Text style={style.login}>CAFEPEDIA</Text>
              </View>
              {auth.isPending ? (
                <ActivityIndicator
                  color="red"
                  style={style.indicator}
                  size="large"
                />
              ) : null}
              {msg === null ? null : (
                <View style={style.error}>
                  <Text style={style.errText}>{msg}</Text>
                </View>
              )}
              <TextInput
                placeholder="username"
                style={style.input}
                onChangeText={(text) => setUser(text)}
                value={user}
              />
              <TextInput
                value={password}
                textContentType="password"
                placeholder="password"
                secureTextEntry={true}
                style={style.input}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={style.btnLogin}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.regis}
                onPress={() => navigation.navigate('register')}>
                <Text style={style.loginRegis}>
                  Don't have an account? Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Login;
