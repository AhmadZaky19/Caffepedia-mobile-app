import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register';
import Login from '../screens/login';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Auth;
