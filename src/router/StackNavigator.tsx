import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

//Rutas de Screens y parametros que reciben
export type RouteStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id: number, nombre: string },
}

//Se define los parametros que tendran las vistas
const Stack = createStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //initialRouteName='Pagina1Screen' Se indica con que screen inicia la aplicacion
            screenOptions={{
                //headerShown: false,  Oculta el header del Stack Navigator
                headerStyle:{
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title:"Página 1" }} component={ Pagina1Screen }/>
            <Stack.Screen name="Pagina2Screen" options={{ title:"Página 2" }} component={ Pagina2Screen }/>
            <Stack.Screen name="Pagina3Screen" options={{ title:"Página 3" }} component={ Pagina3Screen }/>
            <Stack.Screen name="PersonaScreen" options={{ title:"Persona Screen"}} component={ PersonaScreen } />
        </Stack.Navigator>
    );
}
