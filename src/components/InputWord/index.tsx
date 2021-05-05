import React, {useContext, useState} from 'react';
import {Alert} from 'react-native';
import colors from '../../../public/styles/colors';
import fonts from '../../../public/styles/fonts';
import {VoiceHandlerContext} from '../../contexts/VoiceHandlerContext';

import {Container, Input, SubmitButton, Text} from './styles';

export default function VoiceButton() {
  const [text, onChangeText] = useState('');
  const {word, changeWord} = useContext(VoiceHandlerContext);
  const [, setIsWord] = useState(false);

  function submit() {
    if (text.toLowerCase() === word.toLowerCase()) {
      setIsWord(true);
      onChangeText('');
      changeWord();
      Alert.alert(`Você acertou a palavra ${word}`);
      setIsWord(false);
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
        <Text size={fonts.medium} color={colors.white}>
          Submit
        </Text>
      </SubmitButton>
    </Container>
  );
}
