import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('Mail');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, styles.leftTab, selectedTab === 'Mail' && styles.activeTab]}
          onPress={() => setSelectedTab('Mail')}
        >
          <Text style={[styles.tabText, selectedTab === 'Mail' && styles.activeTabText]}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, styles.rightTab, selectedTab === 'Update' && styles.activeTab]}
          onPress={() => setSelectedTab('Update')}
        >
          <Text style={[styles.tabText, selectedTab === 'Update' && styles.activeTabText]}>Update</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Mail' ? (
        <View style={styles.mailContent}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for users"
            placeholderTextColor="#A9A9A9"
          />
          <ScrollView>
            {['User 1', 'User 2', 'User 3'].map((user, index) => (
              <View key={index} style={styles.userRow}>
                <View style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user}</Text>
                  <Text style={styles.messageText}>
                    {index === 0 ? '1 new message' : index === 1 ? 'Hello' : '2 new messages'}
                  </Text>
                </View>
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>{index === 0 ? '1' : index === 2 ? '2' : '3'}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.updateContent}>
          <Text style={styles.updateTitle}>For you today</Text>
          <View style={styles.gridContainer}>
            {[...Array(6)].map((_, index) => (
              <View key={index} style={styles.gridItem} />
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  leftTab: {
    backgroundColor: '#E0E0E0',
  },
  rightTab: {
    backgroundColor: '#E0E0E0',
  },
  activeTab: {
    backgroundColor: '#004d00',
  },
  tabText: {
    color: '#004d00',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  searchBar: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#004d00',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#004d00',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    color: '#004d00',
    fontWeight: 'bold',
  },
  messageText: {
    color: '#A9A9A9',
  },
  notificationBadge: {
    backgroundColor: '#004d00',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
  mailContent: {
    flex: 1,
  },
  updateContent: {
    flex: 1,
    alignItems: 'center',
  },
  updateTitle: {
    fontSize: 20,
    color: '#004d00',
    marginVertical: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#E0E0E0',
    margin: 5,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#004d00',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});
