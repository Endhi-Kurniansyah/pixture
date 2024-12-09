import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/pixture.png')} // Ganti dengan lokasi file logo Anda
          style={styles.logoImage}
        />
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Login to your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or username"
          placeholderTextColor="#c2c2c2"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#c2c2c2"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orLoginWithText}>Or login with</Text>
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
              style={styles.socialg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/f.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpText}>
          Don’t have an account?
          <TouchableOpacity onPress={() => router.replace('./signup')}>
            {/* Navigasi ke SignUp */}
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
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
  forgotPasswordText: {
    color: '#0d4d4d',
    marginBottom: 30,
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#0d4d4d',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orLoginWithText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    color: '#0d4d4d',
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
    borderRadius: 25,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#0d4d4d',
  },
  signUpLink: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  socialg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
