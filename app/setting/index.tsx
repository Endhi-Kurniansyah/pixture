import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsScreen = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sections = [
    {
      title: 'General',
      items: [
        {
          label: 'Account',
          onPress: () => {
            if (!isLoggedIn) {
              router.push('/login');
            } else {
              console.log('Navigate to account settings');
            }
          },
          extra: !isLoggedIn ? 'Mendaftar' : null,
        },
        { label: 'Language',
          onPress: () => router.push('./language')},
        { label: 'Notification',
          onPress: () => router.push('./notification')},
        { label: 'Privacy & data',
          onPress: () => router.push('./privacydata')},
      ],
    },
    {
      title: 'Feedback',
      items: [
        { label: 'Help center',
          onPress: () => router.push('./helpcenter')},
        { label: 'About',
          onPress: () => router.push('./about')},
      ],
    },
  ];

  if (isLoggedIn) {
    sections.push({
      title: 'Action',
      items: [
        { label: 'Change account', onPress: () => console.log('Change account') },
        { label: 'Logout', onPress: () => setIsLoggedIn(false) },
      ],
    });
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/profile')}>
        <Ionicons name="arrow-back" size={24} color="#164e41" />
      </TouchableOpacity>
      <Text style={styles.header}>Settings</Text>
      {sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.itemContainer}
              onPress={item.onPress}
            >
              <View style={styles.itemRow}>
                <Text style={styles.itemLabel}>{item.label}</Text>
                {item.extra && (
                  <Text style={styles.extraText}>{item.extra}</Text>
                )}
              </View>
              <Ionicons name="chevron-forward" size={20} color="#164e41" />
            </TouchableOpacity>
          ))}
        </View>
      ))}
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
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#8baaa1',
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    fontSize: 16,
    color: '#164e41',
  },
  extraText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#00796b',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
