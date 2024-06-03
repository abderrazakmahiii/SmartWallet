import React from 'react';
import { View } from 'react-native';
import SuccessTransfer from '../components/SuccessTransfer';
import FailTransfer from '../components/FailTransfer';
import NavigationBar from '../components/NavigationBar';

const TransferStatusScreen = ({ navigation, success }) => {
  success = false;
  return (
    <View style={{ flex: 1 }}>
      {success ? <SuccessTransfer navigation={navigation} /> : <FailTransfer navigation={navigation} />}
      <NavigationBar />
    </View>
  );
};

export default TransferStatusScreen;
