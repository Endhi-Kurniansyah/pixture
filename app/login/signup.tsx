import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();

  // State untuk input pengguna
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menangani pendaftaran
  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.6:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama_pengguna: username,
          email: email,
          kata_sandi: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Account created successfully!');
        router.replace('/login'); // Navigasi ke login page
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      Alert.alert('Error', 'Failed to connect to server');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/pixture.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Form Pendaftaran */}
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Create account</Text>

        {/* Input Username */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#a0b9b9"
          value={username}
          onChangeText={setUsername}
        />
        {/* Input Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#a0b9b9"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {/* Input Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a0b9b9"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Tombol Sign Up */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Atau lanjutkan dengan */}
        <Text style={styles.orContinueText}>Or continue with</Text>

        {/* Tombol Login Sosial Media */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/x.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/g.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/f.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Navigasi ke Login */}
        <Text style={styles.loginText}>
          Have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => router.replace('/login')}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: 10,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0d4d4d',
  },
  input: {
    height: 50,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#0d4d4d',
  },
  signupButton: {
    backgroundColor: '#1d4d4f',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContinueText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#8fa6a8',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 2,
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#0d4d4d',
  },
  loginLink: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
