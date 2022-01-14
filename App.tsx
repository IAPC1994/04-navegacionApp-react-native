import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/router/StackNavigator';
//import { MenuLateralBasico } from './src/router/MenuLateralBasico';
import { MenuLateral } from './src/router/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/router/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        { /* <StackNavigator /> */ }
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children } : any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;