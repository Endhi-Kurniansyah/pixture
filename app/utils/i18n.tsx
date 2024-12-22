import i18n from 'i18n-js';
import * as Localization from 'expo-localization';


// Define translations
const translations: { [key: string]: { [key: string]: string } } = {
  en: {
    selectLanguage: 'Select Language',
  },
  id: {
    selectLanguage: 'Pilih Bahasa',
  },
  es: {
    selectLanguage: 'Seleccionar idioma',
  },
  fr: {
    selectLanguage: 'Choisir la langue',
  },
  de: {
    selectLanguage: 'Sprache auswählen',
  },
};

// Configure i18n
i18n.fallbacks = true; // Use fallback language if translation is missing
i18n.translations = translations;

// Set initial language based on device settings
const defaultLanguage = Localization.locale.split('-')[0];
i18n.locale = translations[defaultLanguage] ? defaultLanguage : 'en';

// Helper function to update language dynamically
export const setAppLanguage = (languageCode: string): void => {
  if (translations[languageCode]) {
    i18n.locale = languageCode;
  } else {
    console.warn(`Language code \"${languageCode}\" not found in translations.`);
  }
};

export default i18n;
