import React from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Button, Text, Menu, Brand} from './styles';

export default function Home() {
  const navigation = useNavigation();

  const textColor = 'black';
  const textSize = 28;

  return (
    <Container>
      <Brand>
        <Text size={44} color={textColor}>
          Digi Word
        </Text>
      </Brand>
      <Menu>
        <Button onPress={() => navigation.navigate('Word')}>
          <Text size={textSize} color={textColor}>
            Começar
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Score')}>
          <Text size={textSize} color={textColor}>
            Pontuação
          </Text>
        </Button>
        <Button onPress={() => BackHandler.exitApp()}>
          <Text size={textSize} color={textColor}>
            Sair
          </Text>
        </Button>
      </Menu>
    </Container>
  );
}
