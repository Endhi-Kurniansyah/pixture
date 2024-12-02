import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const imageWidth = (width - 50) / 2; // Menyesuaikan ukuran grid

const categories = ['Anime', 'Game', 'Art', 'Modern'];
const sampleData = Array.from({ length: 8 }, (_, index) => ({ id: index.toString() }));

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#B0B0B0" style={styles.searchIcon} />
        <TextInput placeholder="Look for ideas" placeholderTextColor="#B0B0B0" style={styles.searchInput} />
        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Image Grids */}
      <Text style={styles.sectionTitle}>Ideas for you</Text>
      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={() => <View style={styles.imagePlaceholder} />}
        contentContainerStyle={styles.gridContainer}
      />

      <Text style={styles.sectionTitle}>Most popular</Text>
      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={() => <View style={styles.imagePlaceholder} />}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF1F3',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  cameraButton: {
    backgroundColor: '#274E13',
    borderRadius: 20,
    padding: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  categoryButton: {
    backgroundColor: '#274E13',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#274E13',
    marginBottom: 15,
  },
  gridContainer: {
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    width: imageWidth,
    height: imageWidth * 0.8, // Menyesuaikan proporsi gambar
    backgroundColor: '#E9ECEF',
    borderRadius: 10,
    marginBottom: 15,
  },
});
