import React from 'react';
import VoiceButton from '../../components/VoiceButton';

import {Container, VoiceHandler} from './styles';

export default function Word() {
  return (
    <Container>
      <VoiceHandler>
        <VoiceButton />
      </VoiceHandler>
    </Container>
  );
}
