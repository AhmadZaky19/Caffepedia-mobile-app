import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Home from './src/screens/home';
import Carts from './src/screens/carts';
import Register from './src/screens/register';
import Login from './src/screens/login';
import User from './src/screens/user';
import EditProduct from './src/screens/editProduct';
import EditProfile from './src/screens/editProfile';
import FilterProduct from './src/screens/filterProduct';

const Stack = createStackNavigator();

const App = () => {
  const {store, persistor} = configureStore();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="filterProduct" component={FilterProduct} />
          <Stack.Screen name="carts" component={Carts} />
          <Stack.Screen name="user" component={User} />
          <Stack.Screen name="editProfile" component={EditProfile} />
          <Stack.Screen name="editProduct" component={EditProduct} />
        </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
