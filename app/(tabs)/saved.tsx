import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SavedScreen() {
  const savedItems = [
    { id: '1', title: 'Saved 1', images: 0 },
    { id: '2', title: 'Saved 2', images: 0 },
    { id: '3', title: 'Saved 3', images: 0 },
    { id: '4', title: 'Saved 4', images: 0 },
  ];

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#6B8E23" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Look for the one you saved"
          placeholderTextColor="#A9A9A9"
        />
        <Ionicons name="swap-horizontal-outline" size={24} color="#6B8E23" style={styles.swapIcon} />
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={28} color="#6B8E23" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>That you save</Text>

      {/* Saved items */}
      <FlatList
        data={savedItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.savedItem}>
            <View style={styles.imageGrid}>
              <View style={styles.imageBox1}></View>
              <View style={styles.imageBox2}></View>
              <View style={styles.imageBox3}></View>
              <View style={styles.imageBox4}></View>
            </View>
            <Text style={styles.savedTitle}>{item.title}</Text>
            <Text style={styles.imageCount}>{item.images} images</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    marginTop: 30,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#006400',
  },
  swapIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginBottom: 20,
  },
  savedItem: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    alignItems: 'center',
  },
  imageGrid: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageBox1: {
    width: '48%',
    height: 38,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    marginBottom: 4,
  },
  imageBox2: {
    width: '48%',
    height: 38,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    marginLeft: '4%',
    marginBottom: 4,
  },
  imageBox3: {
    width: '48%',
    height: 38,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
  },
  imageBox4: {
    width: '48%',
    height: 38,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    marginLeft: '4%',
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006400',
    marginTop: 8,
  },
  imageCount: {
    fontSize: 12,
    color: '#808080',
    marginTop: 4,
  },
});
