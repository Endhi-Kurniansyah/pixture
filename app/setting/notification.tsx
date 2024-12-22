import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';  // Import the useRouter hook from expo-router
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  const [isPushEnabled, setIsPushEnabled] = useState(true);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);

  // Use the useRouter hook to get the router instance
  const router = useRouter();

  const togglePushNotification = () => {
    setIsPushEnabled((prevState) => !prevState);
    console.log('Push Notifications:', !isPushEnabled ? 'Enabled' : 'Disabled');
  };

  const toggleEmailNotification = () => {
    setIsEmailEnabled((prevState) => !prevState);
    console.log('Email Notifications:', !isEmailEnabled ? 'Enabled' : 'Disabled');
  };

  const handleSaveSettings = () => {
    // Add any logic you want for saving notification settings
    Alert.alert('Settings Saved', 'Your notification settings have been saved successfully!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/setting')}>
        <Ionicons name="arrow-back" size={24} color="#164e41" />
      </TouchableOpacity>
      <Text style={styles.header}>Notification Settings</Text>

      <View style={styles.item}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          trackColor={{ false: '#e0e0e0', true: '#164e41' }}
          thumbColor={isPushEnabled ? '#164e41' : '#f4f4f4'}
          onValueChange={togglePushNotification}
          value={isPushEnabled}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>Email Notifications</Text>
        <Switch
          trackColor={{ false: '#e0e0e0', true: '#164e41' }}
          thumbColor={isEmailEnabled ? '#164e41' : '#f4f4f4'}
          onValueChange={toggleEmailNotification}
          value={isEmailEnabled}
        />
      </View>
      
      {/* Save settings button can be added if needed */}
      <TouchableOpacity style={styles.button} onPress={handleSaveSettings}>
        <Text style={styles.buttonText}>Save Settings</Text>
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
  button: {
    backgroundColor: '#164e41',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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

export default NotificationScreen;
