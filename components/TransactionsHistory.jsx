import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import transactionsData from '../transactionsHistory.json';
import { color } from 'react-native-elements/dist/helpers';

const TransactionsHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData.transactionHistory.reverse());
  }, []);

  return (
    <View style={styles.transactionsContainer}>
      {transactions.map(transaction => (
        <View key={transaction.transactionId} style={styles.transaction}>
          <View style={styles.transactionIcon}>
            <Feather
              name={transaction.amount >= 0 ? 'arrow-up-right' : 'arrow-down-left'}
              size={20}
              color={transaction.amount >= 0 ? 'green' : 'red'}
            />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
            <Text style={styles.transactionName}>{transaction.name}</Text>
          </View>
          <View style={styles.transactionAmountDate}>
            <Text style={styles.transactionAmount}>{transaction.amount.toFixed(2)}€</Text>
            <Text style={styles.transactionDate}>{new Date(transaction.date).toLocaleDateString()}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    
    flex: 1,
    flexDirection: 'column',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  transactionName: {
    color: 'gray',
  },
  transactionIcon: {
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  transactionDescription: {
    fontWeight: 'bold',
    color: 'white',
  },
  transactionAmountDate: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontWeight: 'bold',
    color: 'white',
  },
  transactionDate: {
    marginTop: 5,
    color: 'gray',
  },
});

export default TransactionsHistory;
