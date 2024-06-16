import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionsHistory from './TransactionsHistory'; 
import TransferInput from './TransferInput'; 
import Stats from './Stats'; 

const SelectedHomeMenu = ({ selectedMenu }) => {
  return (
    <View style={styles.container}>
      {selectedMenu === 'Transactions' && <TransactionsHistory />}
      {selectedMenu === 'Transfer' && <TransferInput />}
      {selectedMenu === 'Stats' && <Stats />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
    width: '90%',
  },
});

export default SelectedHomeMenu;
