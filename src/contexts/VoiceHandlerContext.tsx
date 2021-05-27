import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {Findable} from '../services/interfaces/Findable';
import FindWordInJson from '../services/finders/FindWordInJson';
import {randomIndex, randomLetter} from '../services/helpers/RandomizerHelper';
import Tts, {ReactNativeTts} from 'react-native-tts';
// import List from '../structures/List';

interface VoiceHandlerProviderProps {
  children: ReactNode;
}

interface VoiceHandlerContextData {
  word: string;
  language: string | 'pt-br';
  tts: ReactNativeTts;
  isWord: boolean;
  setWord: (word: string) => void;
  setLanguage: (language: string) => void;
  setIsWord: (isWord: boolean) => void;
  changeWord: () => void;
}

export const VoiceHandlerContext = createContext({} as VoiceHandlerContextData);

// const listWords: List = new List();

export function VoiceHandlerProvider({children}: VoiceHandlerProviderProps) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('pt-br');
  const [isWord, setIsWord] = useState(false);
  //  const [index, setIndex] = useState(0);
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

  //  function changeWord() {
  //    if (!word) {
  //      createListWord(30);
  //    }
  //
  //    console.log(listWords.get(index) + ' index -> ' + index);
  //    console.log(listWords.getAll());
  //    setWord(listWords.get(index));
  //    setIsWord(false);
  //    setIndex(index + 1);
  //  }

  function randomWord(): string {
    const letter = randomLetter();
    const index = randomIndex(finder.sizeWordListByLetter(letter));
    return finder.findWord(letter, index);
  }

  //  function createListWord(size: number) {
  //    for (var i = 0; i < size; i++) {
  //      const result = randomWord();
  //      listWords.add(result);
  //    }
  //  }

  return (
    <VoiceHandlerContext.Provider
      value={{
        word,
        language,
        isWord,
        tts,
        setWord,
        setLanguage,
        setIsWord,
        changeWord,
      }}>
      {children}
    </VoiceHandlerContext.Provider>
  );
}
