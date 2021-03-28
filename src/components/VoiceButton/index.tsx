import React, {useContext, useEffect, useState} from 'react';
import Tts from 'react-native-tts';
import {VoiceHandlerContext} from '../../contexts/VoiceHandlerContext';

import {Button, Container, Text} from './styles';

export default function VoiceButton() {
  const {word, language} = useContext(VoiceHandlerContext);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    if (language !== undefined && language.length !== 0) {
      Tts.setDefaultLanguage(language);
    }
  }, [language]);

  function handleVoice() {
    Tts.getInitStatus().then(() => Tts.speak(word));
    Tts.addEventListener('tts-start', () => setIsExecuting(true));
    Tts.addEventListener('tts-finish', () => setIsExecuting(false));
    Tts.addEventListener('tts-cancel', () => setIsExecuting(false));
  }

  return (
    <Container>
      <Button
        width={255}
        height={255}
        color={'red'}
        onPress={() => {
          if (!isExecuting) {
            handleVoice();
          }
        }}>
        <Text size={22} color={'white'}>
          Voice Button
        </Text>
      </Button>
    </Container>
  );
}
