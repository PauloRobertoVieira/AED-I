import React from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, ImageBackground, Button, Text, Menu, Brand, BrandText} from './styles';
import colors from '../../../public/styles/colors';
import fonts from '../../../public/styles/fonts';

const fundo = '../../assets/fundo.png';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
            <ImageBackground
      source={require(fundo)}
      >
      <Brand>
        <BrandText size={fonts.xlarge} color={colors.heading}>
          Digi Word
        </BrandText>
      </Brand>
      <Menu>
        <Button onPress={() => navigation.navigate('Word')}>
          <Text size={fonts.large} color={colors.text}>
            Começar
          </Text>
        </Button>
        <Button onPress={() => navigation.navigate('Score')}>
          <Text size={fonts.large} color={colors.text}>
            Pontuação
          </Text>
        </Button>
        <Button onPress={() => BackHandler.exitApp()}>
          <Text size={fonts.large} color={colors.text}>
            Sair
          </Text>
        </Button>
      </Menu>
      </ImageBackground>
    </Container>
  );
}
