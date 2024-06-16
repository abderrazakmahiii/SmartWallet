import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TransactionsHistory from '../components/TransactionsHistory'; 
import NavigationBar from '../components/NavigationBar'; 
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={25} color="white" style={styles.icon} />
        <Text style={styles.title}>Notifications</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <TransactionsHistory />
      </ScrollView>
      <NavigationBar style={styles.navigationBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 10,
    paddingBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginBottom: 100,
  },
  scrollViewContent: {
    padding: 10,
  },
});

export default NotificationsScreen;
