import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PrivacyDataScreen = () => {
  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Account deleted') },
      ]
    );
  };

  const router = useRouter();

  const handleViewPrivacyPolicy = () => {
    console.log('Navigating to Privacy Policy');
    // Navigasi ke layar kebijakan privasi jika ada
  };

  const handleToggleDataSharing = () => {
    console.log('Toggling data sharing preferences');
    // Tambahkan logika untuk mengelola preferensi berbagi data
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setting')}>
        <Ionicons name="arrow-back" size={24} color="#164e41" />
      </TouchableOpacity>
      <Text style={styles.header}>Privacy & Data</Text>

      <TouchableOpacity style={styles.item} onPress={handleViewPrivacyPolicy}>
        <Text style={styles.label}>View Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={20} color="#164e41" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleToggleDataSharing}>
        <Text style={styles.label}>Data Sharing Preferences</Text>
        <Ionicons name="chevron-forward" size={20} color="#164e41" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.item, styles.dangerItem]}
        onPress={handleDeleteAccount}
      >
        <Text style={[styles.label, styles.dangerLabel]}>Delete Account</Text>
        <Ionicons name="trash" size={20} color="#d32f2f" />
      </TouchableOpacity>
    </View>
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
  dangerItem: {
    marginTop: 24,
    borderBottomWidth: 0,
  },
  dangerLabel: {
    color: '#d32f2f',
    fontWeight: 'bold',
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

export default PrivacyDataScreen;
