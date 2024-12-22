import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HelpCenterScreen = () => {
  const handleFAQPress = () => {
    console.log('Navigating to FAQ section');
    // Tambahkan navigasi ke layar FAQ jika ada
  };

  const handleContactSupport = () => {
    Alert.alert(
      'Contact Support',
      'You can reach our support team at support@example.com.',
      [
        { text: 'Close', style: 'cancel' },
        {
          text: 'Copy Email',
          onPress: () => {
            console.log('Copied email to clipboard');
          },
        },
      ]
    );
  };

  const router = useRouter();

  const handleReportIssue = () => {
    console.log('Navigating to Report Issue form');
    // Tambahkan navigasi ke form pengaduan jika ada
  };

  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setting')}>
            <Ionicons name="arrow-back" size={24} color="#164e41" />
        </TouchableOpacity>
      <Text style={styles.header}>Help Center</Text>

      <TouchableOpacity style={styles.item} onPress={handleFAQPress}>
        <Text style={styles.label}>FAQs</Text>
        <Ionicons name="chevron-forward" size={20} color="#164e41" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleContactSupport}>
        <Text style={styles.label}>Contact Support</Text>
        <Ionicons name="mail" size={20} color="#164e41" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleReportIssue}>
        <Text style={styles.label}>Report an Issue</Text>
        <Ionicons name="bug" size={20} color="#164e41" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#164e41',
    marginBottom: 24,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    color: '#164e41',
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
});

export default HelpCenterScreen;
