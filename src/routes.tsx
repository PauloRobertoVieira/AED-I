import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Word from './pages/Word';
import Score from './pages/Score';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Word" component={Word} />
      <Stack.Screen name="Score" component={Score} />
    </Stack.Navigator>
  );
}
