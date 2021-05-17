import React from 'react';
import InputWord from '../../components/InputWord';

import VoiceButton from '../../components/VoiceButton';

import {Container, ImageBackground, VoiceHandler} from './styles';

const fundo = '../../assets/fundo.png';

export default function Word() {
  return (
    <Container>
      <ImageBackground
      source={require(fundo)}
      >
      <VoiceHandler>
        <VoiceButton />
      </VoiceHandler>
      <InputWord />
      </ImageBackground>
    </Container>
  );
}
