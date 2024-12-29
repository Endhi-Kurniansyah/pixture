import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useLoginContext } from '../context/logincontext';

export default function ProfileScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  // Fungsi login (contoh)
  const handleLogin = () => {
    setIsLoggedIn(true); // Set status login menjadi true
  };

  // Fungsi logout (contoh)
  const handleLogout = () => {
    setIsLoggedIn(false); // Set status login menjadi false
  };

  return (
    <View style={styles.container}>
      {/* Jika sudah login, tampilkan profil */}
      {isLoggedIn ? (
        <>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/setting')}>
              <Ionicons name="reorder-three-sharp" color={'#004d40'} size={24} />
            </TouchableOpacity>
          </View>

          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.profileImage}
            />
          </View>

          {/* Profile Name */}
          <Text style={styles.profileName}>Your name</Text>

          {/* Tombol Logout */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
            <Text style={styles.loginButtonText}>LOGOUT</Text>
          </TouchableOpacity>
        </>
      ) : (
        // Jika belum login, tampilkan halaman login
        <>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.menuButton} onPress={() => router.push('/setting')}>
              <Ionicons name="reorder-three-sharp" color={'#004d40'} size={24} />
            </TouchableOpacity>
          </View>

          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.profileImage}
            />
          </View>

          {/* Profile Name */}
          <Text style={styles.profileName}>Your name</Text>

          {/* Tombol Login */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d40',
  },
  menuButton: {
    padding: 10,
  },
  profileImageContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  profileName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#004d40',
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
