import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {Findable} from '../services/interfaces/Findable';
import FindWordInJson from '../services/finders/FindWordInJson';
import {randomIndex, randomLetter} from '../services/helpers/RandomizerHelper';
import Tts, {ReactNativeTts} from 'react-native-tts';

interface VoiceHandlerProviderProps {
  children: ReactNode;
}

interface VoiceHandlerContextData {
  word: string;
  language: string | 'pt-br';
  tts: ReactNativeTts;
  setWord: (word: string) => void;
  setLanguage: (language: string) => void;
  changeWord: () => void;
}

export const VoiceHandlerContext = createContext({} as VoiceHandlerContextData);

export function VoiceHandlerProvider({children}: VoiceHandlerProviderProps) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('pt-br');
  const tts = Tts;

  const finder: Findable = new FindWordInJson();

  useEffect(changeWord, []);

  useEffect(() => {
    if (language !== undefined) {
      tts.getInitStatus().then(() => tts.setDefaultLanguage(language));
    }
  }, [language, tts]);

  function changeWord() {
    setWord(randomWord());
  }

  function randomWord(): string {
    const letter = randomLetter();
    const index = randomIndex(finder.sizeWordListByLetter(letter));
    return finder.findWord(letter, index);
  }

  return (
    <VoiceHandlerContext.Provider
      value={{
        word,
        language,
        tts,
        setWord,
        setLanguage,
        changeWord,
      }}>
      {children}
    </VoiceHandlerContext.Provider>
  );
}
