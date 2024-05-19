import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? '' : tabName);
  };

  const getIcon = (tabName) => {
    switch (tabName) {
      case 'wallet':
        return activeTab === 'wallet' ? (
          <Entypo name="wallet" size={24} color="#8000FF" />
        ) : (
          <AntDesign name="wallet" size={24} color="white" />
        );
      case 'Contacts':
        return activeTab === 'Contacts' ? (
          <MaterialIcons name="people" size={24} color="#8000FF" />
        ) : (
          <Feather name="users" size={24} color="white" />
        );
      case 'bell':
        return activeTab === 'bell' ? (
          <Ionicons name="notifications" size={24} color="#8000FF" />
        ) : (
          <MaterialIcons name="notifications-none" size={24} color="white" />
        );
      case 'user':
        return activeTab === 'user' ? (
          <Ionicons name="person" size={24} color="#8000FF" />
        ) : (
          <AntDesign name="user" size={24} color="white" />
        );
      default:
        return null;
    }
  };

  const getText = (tabName) => {
    switch (tabName) {
      case 'wallet':
        return 'Wallet';
      case 'Contacts':
        return 'Contacts';
      case 'bell':
        return 'Notifications';
      case 'user':
        return 'Profile';
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabClick('wallet')} style={[styles.tabItem, activeTab === 'wallet' ? styles.activeTab : null]}>
          {getIcon('wallet')}
          {activeTab === 'wallet' && <Text style={styles.tabText}>{getText('wallet')}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('Contacts')} style={[styles.tabItem, activeTab === 'Contacts' ? styles.activeTab : null]}>
          {getIcon('Contacts')}
          {activeTab === 'Contacts' && <Text style={styles.tabText}>{getText('Contacts')}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('bell')} style={[styles.tabItem, activeTab === 'bell' ? styles.activeTab : null]}>
          {getIcon('bell')}
          {activeTab === 'bell' && <Text style={styles.tabText}>{getText('bell')}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick('user')} style={[styles.tabItem, activeTab === 'user' ? styles.activeTab : null]}>
          {getIcon('user')}
          {activeTab === 'user' && <Text style={styles.tabText}>{getText('user')}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#222',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    zIndex: 1,
    height: 100,
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  activeTab: {
    borderRadius: 15,
  },
  tabText: {
    color: '#8000FF',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default NavigationBar;