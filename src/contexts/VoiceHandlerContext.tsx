import React, {createContext, ReactNode, useState} from 'react';

interface VoiceHandlerProviderProps {
  children: ReactNode;
}

interface VoiceHandlerContextData {
  word: string;
  language: string | 'pt-br';
  setWord: (word: string) => void;
  setLanguage: (language: string) => void;
}

export const VoiceHandlerContext = createContext({} as VoiceHandlerContextData);

export function VoiceHandlerProvider({children}: VoiceHandlerProviderProps) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <VoiceHandlerContext.Provider
      value={{
        word,
        language,
        setWord,
        setLanguage,
      }}>
      {children}
    </VoiceHandlerContext.Provider>
  );
}
