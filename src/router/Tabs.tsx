import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
  return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator(); //BottomTabNavigator de Android

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle:{
          fontSize: 15
        },
        tabBarIcon: ({ color }) => {
          
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = "airplane-outline";
              break;
            case 'TopTabNavigator':
              iconName = "share-social-outline";
              break;
            case 'StackNavigator':
              iconName = "file-tray-stacked-outline";
              break;
          }

          return <Text style={{ color }}> <Icon name={ iconName } size={20} color="white" /> </Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator(); //BottomTabNavigator de IOS

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle:{
          fontSize: 15
        },
        tabBarIcon: ({ color }) => {
          
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = "airplane-outline";
              break;
            case 'TopTabNavigator':
              iconName = "share-social-outline";
              break;
            case 'StackNavigator':
              iconName = "file-tray-stacked-outline";
              break;
          }

          return <Text style={{ color }}> <Icon name={ iconName } size={30} color="#900" /> </Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}> T1 </Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}