/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigoator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {styles} from './../theme/Theme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
        </Stack.Navigator>
    );
};

export const DrawerMenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShadowVisible: false,
        headerShown: false,
      }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="StackNavigator" options={{ drawerType: 'back'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = (props: DrawerContentComponentProps) => {
  console.log(props);
  return (
    <DrawerContentScrollView>
      <View style={styles.ImageView}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBotao} onPress={() => props.navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Stack Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBotao} onPress={() => props.navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
