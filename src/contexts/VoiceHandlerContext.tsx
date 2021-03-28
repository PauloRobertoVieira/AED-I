import React, {createContext, ReactNode, useState} from 'react';

interface VoiceHandlerProviderProps {
  children: ReactNode;
}

interface VoiceHandlerContextData {
  word: string;
  language: string | 'pt-br';
  changeWord: (word: string) => void;
  changeLanguage: (language: string) => void;
}

export const VoiceHandlerContext = createContext({} as VoiceHandlerContextData);

export function VoiceHandlerProvider({children}: VoiceHandlerProviderProps) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('');

  function changeWord(word: string) {
    setWord(word);
  }

  function changeLanguage(language: string) {
    setLanguage(language);
  }

  return (
    <VoiceHandlerContext.Provider
      value={{
        word,
        language,
        changeWord,
        changeLanguage,
      }}>
      {children}
    </VoiceHandlerContext.Provider>
  );
}
