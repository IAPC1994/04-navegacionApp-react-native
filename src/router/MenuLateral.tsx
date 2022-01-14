import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
        }}
        drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
        <View style={ styles.avatarContainer }>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
            }} 
            style={ styles.avatar } 
          />
        </View>

        <View style={ styles.menuContainer }>
          <TouchableOpacity style={ styles.menuBoton } onPress={ () => navigation.navigate('Tabs') }>
            <Text style={ styles.menuTexto }> <Icon name="compass-outline" size={25} color={ colores.primary } />  Navegacion </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.menuBoton } onPress={ () => navigation.navigate('SettingsScreen') }>
          <Text style={ styles.menuTexto }> <Icon name="settings-outline" size={25} color={ colores.primary } /> Ajustes </Text>
          </TouchableOpacity>

        </View>
    </DrawerContentScrollView>
  );
}