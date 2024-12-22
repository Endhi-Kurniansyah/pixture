import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AboutScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#164e41" />
      </TouchableOpacity>
      <Text style={styles.header}>About</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>App Information</Text>
        <Text style={styles.text}>
          This is a sample app built with React Native. It demonstrates the use of navigation, state management, and
          responsive design. It is a part of a learning project to understand mobile development with Expo.
        </Text>
        
        <Text style={styles.title}>Version</Text>
        <Text style={styles.text}>v1.0.0</Text>

        <Text style={styles.title}>Contact</Text>
        <Text style={styles.text}>If you have any questions, feel free to reach us at:</Text>
        <Text style={styles.text}>support@sampleapp.com</Text>
      </View>
    </ScrollView>
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
  contentContainer: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#164e41',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#8baaa1',
    marginBottom: 12,
  },
});

export default AboutScreen;
