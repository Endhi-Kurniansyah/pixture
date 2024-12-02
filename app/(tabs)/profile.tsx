import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter(); // Hook untuk navigasi

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            console.log('Navigating to login...');
            router.push('/login');
          }}
        >
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Gambar Profil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Nama Profil */}
      <Text style={styles.profileName}>Your Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d4d4f', // Warna teks sesuai desain
  },
  signupButton: {
    paddingVertical: 5,
  },
  signupText: {
    fontSize: 16,
    color: '#1d4d4f',
    fontWeight: 'bold',
  },
  profileImageContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Membuat gambar bulat
    resizeMode: 'cover',
    borderColor: '#e8f1f1',
    borderWidth: 3,
  },
  profileName: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d4d4f',
  },
  profileEmail: {
    marginTop: 5,
    fontSize: 16,
    color: '#8fa6a8',
  },
});
