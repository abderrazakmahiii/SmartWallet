import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SelectedHomeMenu from './SelectedHomeMenu';

const HomeMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('Transactions');

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.menuItem, selectedMenu === 'Transactions' ? styles.selectedMenuItem : null]}
          onPress={() => handleMenuClick('Transactions')}
        >
          <FontAwesome5 name="history" size={24} color="white" />
          <Text style={[styles.menuText, selectedMenu === 'Transactions' ? styles.selectedMenuText : null]}>
            Transactions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, selectedMenu === 'Transfer' ? styles.selectedMenuItem : null]}
          onPress={() => handleMenuClick('Transfer')}
        >
          <FontAwesome5 name="exchange-alt" size={24} color="white" />
          <Text style={[styles.menuText, selectedMenu === 'Transfer' ? styles.selectedMenuText : null]}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, selectedMenu === 'Stats' ? styles.selectedMenuItem : null]}
          onPress={() => handleMenuClick('Stats')}
        >
          <Entypo name="bar-graph" size={24} color="white" />
          <Text style={[styles.menuText, selectedMenu === 'Stats' ? styles.selectedMenuText : null]}>Stats</Text>
        </TouchableOpacity>
      </View>
      <SelectedHomeMenu selectedMenu={selectedMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 80,
  },
  menuItem: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  selectedMenuItem: {
    backgroundColor: '#8000FF',
  },
  menuText: {
    color: 'white',
    marginTop: 5,
  },
  selectedMenuText: {
    color: 'white',
  },
});

export default HomeMenu;
