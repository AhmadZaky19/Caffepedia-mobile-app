import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import storeRedux from './src/redux';

import Home from './src/screens/home';
import Orders from './src/screens/orders';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={storeRedux}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="orders" component={Orders} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
