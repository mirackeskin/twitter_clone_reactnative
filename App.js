/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './src/components/CustomDrawer';

import HomeScreen from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import MessageBoxScreen from './src/screens/MessageBoxScreen';

import Icon from "react-native-vector-icons/Ionicons";
//import Icon from 'react-native-vector-icons/FontAwesome';



function MessageBoxDrawer(){
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer {...props} />} useLegacyImplementation>
      <Drawer.Screen name="MessageBox" component={MessageBoxScreen} />
      
    </Drawer.Navigator>
  )
}

function NotificationsDrawer(){
  return(
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer {...props} />} useLegacyImplementation>
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

function DiscoverDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer {...props} />} useLegacyImplementation>
      <Drawer.Screen name="Discovery" component={DiscoverScreen} />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><CustomDrawer {...props} />} useLegacyImplementation>
      <Drawer.Screen  name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const App: () => Node = () => {
  

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }} >

        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="home-outline" size={25}/>
              </View>
            );
          },}}
        name="Home" component={HomeDrawer} />

        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="search-outline" size={25} />
              </View>
            );
          },}} name="Search" component={DiscoverDrawer} />

        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="notifications-outline" size={25} />
              </View>
            );
          },}} name="Notifications" component={NotificationsDrawer} />

        <Tab.Screen  options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Icon name="mail-outline" size={25} />
              </View>
            );
          },}} name="Message Box" component={MessageBoxDrawer} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
