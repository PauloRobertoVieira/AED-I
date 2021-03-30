import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {VoiceHandlerProvider} from './contexts/VoiceHandlerContext';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <VoiceHandlerProvider>
        <StatusBar hidden />
        <Routes />
      </VoiceHandlerProvider>
    </NavigationContainer>
  );
}
