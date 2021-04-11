import React, {createContext, ReactNode, useState} from 'react';
import {Findable} from '../services/interfaces/Findable';
import FindWordInJson from '../services/finders/FindWordInJson';
import {randomIndex, randomLetter} from '../services/helpers/Randomizer';

interface VoiceHandlerProviderProps {
  children: ReactNode;
}

interface VoiceHandlerContextData {
  word: string;
  language: string | 'pt-br';
  setWord: (word: string) => void;
  setLanguage: (language: string) => void;
  changeWord: () => void;
}

export const VoiceHandlerContext = createContext({} as VoiceHandlerContextData);

export function VoiceHandlerProvider({children}: VoiceHandlerProviderProps) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('pt-br');

  const finder: Findable = new FindWordInJson();

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
        setWord,
        setLanguage,
        changeWord,
      }}>
      {children}
    </VoiceHandlerContext.Provider>
  );
}
