import React from 'react';
import VoiceButton from '../../components/VoiceButton';
import {VoiceHandlerProvider} from '../../contexts/VoiceHandlerContext';

import {Container} from './styles';

export default function Word() {
  return (
    <VoiceHandlerProvider>
      <Container>
        <VoiceButton />
      </Container>
    </VoiceHandlerProvider>
  );
}
