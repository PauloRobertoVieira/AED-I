import React from 'react';
import InputWord from '../../components/InputWord';

import VoiceButton from '../../components/VoiceButton';

import {Container, VoiceHandler} from './styles';

export default function Word() {
  return (
    <Container>
      <VoiceHandler>
        <VoiceButton />
      </VoiceHandler>
      <InputWord />
    </Container>
  );
}
