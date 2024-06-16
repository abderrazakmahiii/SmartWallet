import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const Stats = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../imgs/nodata.png')} style={styles.gif} />
      <Text style={styles.text}>Sorry! There are no data to display</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 200,
    height: 150,
  },
  text: {
    color: 'white',
  }
});

export default Stats;
