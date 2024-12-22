import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { setAppLanguage } from './i18n';

interface LanguageContextProps {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  selectedLanguage: 'en',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
      const defaultLanguage = storedLanguage || 'en';
      setSelectedLanguage(defaultLanguage);
      setAppLanguage(defaultLanguage);
    };
    loadLanguage();
  }, []);

  const setLanguage = async (language: string) => {
    setSelectedLanguage(language);
    setAppLanguage(language);
    await AsyncStorage.setItem('selectedLanguage', language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
