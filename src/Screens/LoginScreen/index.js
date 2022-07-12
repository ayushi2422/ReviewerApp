import React from 'react';
import { Text, View, Button } from 'react-native';
import * as theme from '../../Theme/theme';

const LoginScreen = ({ navigation }) => {

  console.log("loginscreen")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.color.GRAY_100
      }}>
      <Button

        onPress={() => { navigation.navigate('SplashScreen') }}
        title="Login Screen"
      />
    </View>
  )
}
export default LoginScreen;