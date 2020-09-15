import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import storeRedux from './src/redux/store';

import Home from './src/screens/home';
import Carts from './src/screens/carts';
import Register from './src/screens/register';
import Login from './src/screens/login';
import User from './src/screens/user';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={storeRedux}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="carts" component={Carts} />
          <Stack.Screen name="user" component={User} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
