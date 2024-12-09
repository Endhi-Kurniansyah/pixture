import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/pixture.png')} // Pastikan path gambar benar
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
        />
        {/* Input Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#a0b9b9"
          keyboardType="email-address"
        />
        {/* Input Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a0b9b9"
          secureTextEntry
        />

        {/* Tombol Login */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            console.log('Navigating to login...');
            router.push('/login'); // Pastikan halaman login ada di struktur folder Anda
          }}
        >
          <Text style={styles.signupButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Atau lanjutkan dengan */}
        <Text style={styles.orContinueText}>Or continue with</Text>

        {/* Tombol Login Sosial Media */}
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/x.png')} // Ganti dengan ikon "X"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/g.png')} // Ganti dengan ikon Google
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/f.png')} // Ganti dengan ikon Facebook
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Navigasi ke Login */}
        <Text style={styles.loginText}>
          Have account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => router.replace('/login')} // Navigasi ke login page
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
