import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/pixture.png')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
});
