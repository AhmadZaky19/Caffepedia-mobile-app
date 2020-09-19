import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carts from '../../screens/carts';
import User from '../../screens/user';
import {useSelector} from 'react-redux';
import HomeAdmin from '../../screens/homeAdmin';
import AddProduct from '../../screens/addProduct';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#4abdac'}}>
      <Tab.Screen
        name="homeAdmin"
        component={HomeAdmin}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="addProduct"
        component={AddProduct}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => <Icon name="plus-square" size={25} />,
        }}
      />
      <Tab.Screen
        name="user"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: () => <Icon name="user-alt" size={25} />,
        }}
      />
    </Tab.Navigator>

    // <Tab.Navigator
    //   activeColor="#f0edf6"
    //   inactiveColor="#3e2465"
    //   barStyle={{backgroundColor: '#4abdac'}}>
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: () => <Icon name="home" size={25} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Carts"
    //     component={Carts}
    //     options={{
    //       tabBarLabel: 'Carts',
    //       tabBarIcon: () => <Icon name="shopping-cart" size={25} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="User"
    //     component={User}
    //     options={{
    //       tabBarLabel: 'User',
    //       tabBarIcon: () => <Icon name="user-alt" size={25} />,
    //     }}
    //   />
    // </Tab.Navigator>
  );

  // if (isAdmin) {
  //   return (
  //     <Tab.Navigator
  //       activeColor="#f0edf6"
  //       inactiveColor="#3e2465"
  //       barStyle={{backgroundColor: '#4abdac'}}>
  //       <Tab.Screen
  //         name="Home"
  //         component={HomeAdmin}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: () => <Icon name="home" size={25} />,
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // } else {
  //   return (
  //     <Tab.Navigator
  //       activeColor="#f0edf6"
  //       inactiveColor="#3e2465"
  //       barStyle={{backgroundColor: '#4abdac'}}>
  //       <Tab.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: () => <Icon name="home" size={25} />,
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Carts"
  //         component={Carts}
  //         options={{
  //           tabBarLabel: 'Carts',
  //           tabBarIcon: () => <Icon name="shopping-cart" size={25} />,
  //         }}
  //       />
  //       <Tab.Screen
  //         name="User"
  //         component={User}
  //         options={{
  //           tabBarLabel: 'User',
  //           tabBarIcon: () => <Icon name="user-alt" size={25} />,
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }
};

export default BottomNavigator;