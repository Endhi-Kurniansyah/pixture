import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useLoginContext } from '../context/logincontext';

// Mendefinisikan tipe data untuk user
interface User {
  name: string;
  profileImage: string;
}

export default function ProfileScreen() {
  const router = useRouter();
  const { isLoggedIn, setLoggedIn } = useLoginContext(); // Ambil status login dari context
  const [userData, setUserData] = useState<User | null>(null);  // Tipe data User
  const [loading, setLoading] = useState(false);  // Untuk status loading

  useEffect(() => {
    // Ambil data pengguna jika sudah login
    if (isLoggedIn) {
      setLoading(true);
      fetchUserData();
    }
  }, [isLoggedIn]);

  // Fungsi untuk mengambil data pengguna
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user');  // Ganti dengan endpoint API Anda
      const data: User = await response.json();  // Mendefinisikan tipe data yang diterima
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  // Fungsi login
  const handleLogin = () => {
    setLoggedIn(true); // Ubah status login menjadi true
  };

  // Fungsi logout
  const handleLogout = () => {
    setLoggedIn(false); // Ubah status login menjadi false
    setUserData(null); // Hapus data pengguna setelah logout
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#004d40" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Jika sudah login, tampilkan profil */}
      {isLoggedIn && userData ? (
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
            <Image source={{ uri: userData.profileImage || 'default-image-url' }} style={styles.profileImage} />
          </View>

          {/* Profile Name */}
          <Text style={styles.profileName}>{userData.name || 'Your name'}</Text>

          {/* Tombol Logout */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
            <Text style={styles.loginButtonText}>LOGOUT</Text>
          </TouchableOpacity>
        </>
      ) : (
        // Jika belum login, tampilkan tombol login
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
            <Image source={require('../../assets/images/user.png')} style={styles.profileImage} />
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
