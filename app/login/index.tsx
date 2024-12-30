import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useLoginContext } from '../context/logincontext';

const LoginScreen = () => {
  const router = useRouter();
  const { setLoggedIn, setUser } = useLoginContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.6:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Invalid login credentials');
        return;
      }

      // Set user data into context
      setLoggedIn(true);
      setUser({ name: data.name, email: data.email }); // Set user data from backend
      alert('Login successful');
      router.push('/profile');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/pixture.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Login to your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or username"
          placeholderTextColor="#c2c2c2"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#c2c2c2"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={() => router.push('./signup')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
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
  signUpText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#0d4d4d',
  },
  signUpLink: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
