
import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/Navigators/Navigation';
import { NativeBaseProvider } from 'native-base';
import { configureStore } from './src/Store';

const store = configureStore();
const App = () => {

  return (    
    <NativeBaseProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NativeBaseProvider>

  );

};

export default (App);

