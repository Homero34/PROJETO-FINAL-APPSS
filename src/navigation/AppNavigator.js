import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import DashboardScreen from '../screens/DashboardScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#6200ee',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={MainStack} 
        options={{ drawerIcon: ({ color }) => <Icon name="home" size={20} color={color} /> }}
      />
      <Drawer.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ drawerIcon: ({ color }) => <Icon name="home" size={20} color={color} /> }}
      />
      <Drawer.Screen
      name="Login"
      component={LoginScreen}
      options={{ drawerIcon: ({ color }) => <Icon name="home" size={20} color={color} /> }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ drawerIcon: ({ color }) => <Icon name="person" size={20} color={color} /> }}
      />
      <Drawer.Screen 
        name="Logout" 
        component={LoginScreen} 
        options={{ drawerIcon: ({ color }) => <Icon name="exit" size={20} color={color} /> }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;