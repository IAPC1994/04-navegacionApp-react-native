import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle:{
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                
                tabBarIcon: ({ color }) => {
          
                    let iconName: string = '';
          
                    switch (route.name) {
                      case 'Chat':
                        iconName = "chatbox-ellipses-outline";
                        break;
                      case 'Contacts':
                        iconName = "people-outline";
                        break;
                      case 'Albums':
                        iconName = "albums-outline";
                        break;
                    }
          
                    return <Text style={{ color }}> <Icon name={ iconName } size={20} color={ colores.primary } /> </Text>
                  }
            })}
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor:'white',
            }}
        >
            <Tab.Screen name="Chat" component={ ChatScreen } />
            <Tab.Screen name="Contacts" component={ ContactScreen } />
            <Tab.Screen name="Albums" component={ AlbumsScreen } />
        </Tab.Navigator>
    )
}
