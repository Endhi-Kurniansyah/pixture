import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../_layout';

const SavedScreen = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Saved Screen</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default SavedScreen;
