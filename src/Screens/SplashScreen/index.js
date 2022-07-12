import React, { useEffect } from 'react';
import { StatusBar, Image, Button } from 'react-native';
import { testImage } from '../../Assets';
import { color, normalize } from '../../Theme/theme';

import { Container } from 'native-base';


const SplashScreen = ({ navigation, route }) => {


  return (
    <Container
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    
      <Button
        onPress={() => { navigation.navigate('LoginScreen') }}
        title="Splash Screen Button"
      />
      {/* <Image
        source={testImage}
        resizeMode="contain"
        style={{
          width: normalize(200),
          height: normalize(200),
        }}
      /> */}
    </Container>
  );
};

export default (SplashScreen);

