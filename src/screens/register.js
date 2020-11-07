import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {registerCreator} from '../redux/actions/auth';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import style from '../style/login';
import background from '../image/tiramisu.jpg';

const Register = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState(null);
  console.log(user, password);

  const handleSubmit = () => {
    if (user === null || password === null) {
      setMsg('username/password cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    } else if (user === '' || password === '') {
      setMsg('username/password/ cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    } else {
      setMsg(null);
      dispatch(registerCreator(user, password));
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
      }, 4000);
    }
  }, [auth]);

  return (
    <ScrollView
    contentContainerStyle={style.container}
    showsVerticalScrollIndicator={false}>
      <ImageBackground source={background} style={style.image}>
        <View style={style.content}>
          <ScrollView style={style.form} showsVerticalScrollIndicator={false}>
            <View style={style.logo}>
              <Text style={style.login}> CAFEPEDIA</Text>
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
              style={style.register}
              onChangeText={(text) => setUser(text)}
              value={user}
            />
            <TextInput
              textContentType="password"
              placeholder="password"
              secureTextEntry={true}
              style={style.register}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={style.btnRegis}
              onPress={() => handleSubmit()}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.regis}
              onPress={() => navigation.navigate('login')}>
              <Text style={style.loginRegis}>Have an account? Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;
