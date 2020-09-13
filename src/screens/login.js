import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {Button} from 'native-base';

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Sign In</Text>
      <View style={{marginTop: 20}}>
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="email"
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
          />
          <Image
            source={require('../assets/icons/open-mail.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              top: 10,
              left: 12,
            }}
          />
        </View>
        <View style={{position: 'relative', marginTop: 20}}>
          <TextInput
            secureTextEntry
            placeholder="password"
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
          />
          <Image
            source={require('../assets/icons/lock.png')}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 10,
              left: 12,
            }}
          />
        </View>
      </View>
      <View style={{width: 350, marginTop: 25}}>
        <Button block rounded style={{backgroundColor: '#4abdac'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            LOG IN
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
