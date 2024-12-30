import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

// Mendefinisikan tipe untuk gambar
interface Gambar {
  id_gambar: number;
  judul: string;
  deskripsi: string;
  url_gambar: string;
}

export default function Index() {
  const [gambarList, setGambarList] = useState<Gambar[]>([]);  // Untuk menyimpan data gambar
  const [loading, setLoading] = useState(true);  // Untuk menampilkan loading saat data sedang diambil

  // Mengambil data gambar dari backend (server.js)
  useEffect(() => {
    const fetchGambar = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/gambar');  // Ganti dengan URL server Anda
        const data = await response.json();
        console.log('Data gambar:', data);  // Memeriksa data gambar yang diterima
        setGambarList(data);  // Menyimpan data ke state
        setLoading(false);  // Mengubah status loading menjadi false
      } catch (error) {
        console.error('Error fetching gambar data:', error);
        setLoading(false);  // Jika terjadi error, status loading tetap false
      }
    };

    fetchGambar();  // Panggil fungsi untuk mengambil data gambar
  }, []);

  // Fungsi untuk merender setiap item gambar
  const renderGambarItem = ({ item }: { item: Gambar }) => {
    return (
      <View style={styles.gambarItem}>
        <Image source={{ uri: item.url_gambar }} style={styles.gambarImage} />
        <Text style={styles.gambarTitle}>{item.judul}</Text>
        <Text style={styles.gambarDescription}>{item.deskripsi}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Image source={require('../../assets/images/pixture.png')} style={styles.logo} />
      </View>

      {/* FlatList untuk menampilkan data gambar */}
      <FlatList
        data={gambarList}  // Data gambar yang sudah diambil
        renderItem={renderGambarItem}  // Fungsi untuk merender item
        keyExtractor={(item) => item.id_gambar.toString()}  // Menetapkan key untuk setiap item
        contentContainerStyle={styles.gambarList}
      />
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
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  gambarList: {
    paddingBottom: 20,
  },
  gambarItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gambarImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  gambarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gambarDescription: {
    fontSize: 14,
    color: '#555',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
