import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const categories = ['Anime', 'Game', 'Art', 'Modern'];
const sampleData = Array.from({ length: 8 }, (_, index) => ({ id: index.toString() }));

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#8E8E8E" style={styles.searchIcon} />
          <TextInput
            placeholder="Look for ideas"
            placeholderTextColor="#8E8E8E"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    flex: 1,
    borderRadius: 20,
    padding: 10,

    color: '#004d00',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  cameraButton: {
    backgroundColor: '#16423C',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#16423C',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginBottom: 15,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16423C',
    marginBottom: 10,
  },
  gridContainer: {
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    width: (width - 60) / 2,
    height: ((width - 60) / 2) * 0.75,
    backgroundColor: '#E9ECEF',
    borderRadius: 10,
    marginBottom: 15,
  },
});
