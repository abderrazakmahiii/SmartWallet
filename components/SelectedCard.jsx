import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SelectedCard = ({ balance, lastRefresh }) => {
  const showDeleteAlert = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Deletion cancelled"),
          style: "cancel"
        },
        {
          text: "Continue",
          onPress: () => console.log("Card removed"),
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.balanceText}>Your Balance</Text>
          <Text style={styles.balanceAmount}>{balance}</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => console.log('Refreshing...')}>
              <AntDesign name="reload1" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={showDeleteAlert}>
              <AntDesign name="delete" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.refreshText}>Last Refreshed {lastRefresh}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  leftContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50,
  },
  rightContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 50,
    marginTop: 20,
  },
  balanceText: {
    fontSize: 17,
    color: '#A9A9A9',
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  refreshText: {
    fontSize: 12,
    color: '#A9A9A9',
    alignSelf: 'flex-end',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
  },
});

export default SelectedCard;
