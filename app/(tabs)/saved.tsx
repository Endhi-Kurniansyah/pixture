import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#8E8E8E" style={styles.searchIcon} />
          <TextInput
            placeholder="Look for ideas"
            placeholderTextColor="#8E8E8E"
            style={styles.searchInput}
          />
        </View>
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    flex: 1,
    borderRadius: 20,
    padding: 10,

    color: '#16423C',
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
