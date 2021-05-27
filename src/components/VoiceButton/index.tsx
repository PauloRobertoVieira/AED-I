import React, {useContext} from 'react';
import {VoiceHandlerContext} from '../../contexts/VoiceHandlerContext';

import {Button, Container, Image} from './styles';
import colors from '../../assets/styles/colors';
import images from '../../assets/styles/images';

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
        <Image source={images.microfone} />
      </Button>
    </Container>
  );
}
