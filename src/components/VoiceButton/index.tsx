import React, {useContext} from 'react';
import {VoiceHandlerContext} from '../../contexts/VoiceHandlerContext';

import {Button, Container, Text} from './styles';
import colors from '../../../public/styles/colors';
import fonts from '../../../public/styles/fonts';

export default function VoiceButton() {
  const {word, tts} = useContext(VoiceHandlerContext);

  function handleVoice() {
    tts.getInitStatus().then(() => tts.speak(word));
  }

  return (
    <Container>
      <Button
        width={255}
        height={255}
        color={colors.button}
        onPress={() => {
          tts.stop();
          handleVoice();
        }}>
        <Text size={fonts.medium} color={colors.white}>
          Voice Button
        </Text>
      </Button>
    </Container>
  );
}
