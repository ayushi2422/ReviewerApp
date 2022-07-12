import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { navigationRef } from './NavigationUtils';
import React from 'react';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar} from 'react-native';
import * as theme from '../Theme/theme';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={theme.color.MAIN_RED} barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
   
  );
};

export default (Navigation);

