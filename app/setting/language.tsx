import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { setAppLanguage } from '../utils/i18n';
import { useRouter } from 'expo-router';

const LanguageScreen = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
  ];

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('selectedLanguage');
        console.log('Stored Language:', storedLanguage); // Debugging log

        const validLanguage = languages.find((lang) => lang.code === storedLanguage);
        const defaultLanguage = 'en';

        if (validLanguage) {
          setSelectedLanguage(validLanguage.code);
          setAppLanguage(validLanguage.code);
        } else {
          setSelectedLanguage(defaultLanguage);
          setAppLanguage(defaultLanguage);
        }
      } catch (error) {
        console.error('Error loading language from AsyncStorage:', error);
      }
    };

    loadLanguage();
  }, []);

  const handleLanguageChange = async (code: string) => {
    try {
      console.log('Selected Language:', code); // Debugging log
      const selectedLang = languages.find((lang) => lang.code === code);

      if (selectedLang) {
        setSelectedLanguage(code);
        setAppLanguage(code);
        await AsyncStorage.setItem('selectedLanguage', code);
      } else {
        console.warn(`Invalid language code: ${code}`);
      }
    } catch (error) {
      console.error('Error saving language to AsyncStorage:', error);
    }
  };

  console.log('Current Locale:', i18n.locale); // Debugging log
  console.log('Translation for selectLanguage:', i18n.t('selectLanguage')); // Debugging log

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#164e41" />
      </TouchableOpacity>

      <Text style={styles.header}>{i18n.t('selectLanguage', { defaultValue: 'Select Language' })}</Text>

      {languages.map(({ code, label }) => (
        <TouchableOpacity
          key={code}
          style={[
            styles.languageItem,
            selectedLanguage === code && styles.selectedLanguage,
          ]}
          onPress={() => handleLanguageChange(code)}
        >
          <Text
            style={[
              styles.languageText,
              selectedLanguage === code && styles.selectedLanguageText,
            ]}
          >
            {label}
          </Text>
          {selectedLanguage === code && (
            <Ionicons name="checkmark" size={20} color="#164e41" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#eaf3f1',
    marginBottom: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#164e41',
    marginBottom: 24,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  languageText: {
    fontSize: 16,
    color: '#164e41',
  },
  selectedLanguage: {
    backgroundColor: '#eaf3f1',
  },
  selectedLanguageText: {
    fontWeight: 'bold',
  },
});

export default LanguageScreen;
