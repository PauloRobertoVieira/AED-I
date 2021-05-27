import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import {VoiceHandlerContext} from '../../contexts/VoiceHandlerContext';

import {Container, Image, Input, SubmitButton} from './styles';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';
import images from '../../assets/styles/images';

export default function VoiceButton() {
  const [text, onChangeText] = useState('');
  const {word, changeWord} = useContext(VoiceHandlerContext);

  function submit() {
    if (text.toLowerCase() === word.toLowerCase()) {
      onChangeText('');
      changeWord();
      Alert.alert(`Você acertou a palavra ${word}`);
    } else {
      Alert.alert('Você errou a palavra');
    }
  }
  return (
    <Container>
      <Input
        size={fonts.medium}
        color={colors.black}
        onChangeText={onChangeText}
        value={text}
        placeholder="Palavra"
      />
      <SubmitButton onPress={submit}>
        <Image source={images.send} />
      </SubmitButton>
    </Container>
  );
}
