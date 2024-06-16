import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Animated } from 'react-native';

const CardDetails = ({ card, selected }) => {
  const { type, number, holder, bank, expiration } = card;

  const cardImage = type === 'visa' ? require('../imgs/visa.png') : require('../imgs/mastercard.png');

  const grayscaleValue = useRef(new Animated.Value(selected ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(grayscaleValue, {
      toValue: selected ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: selected ? 'transparent' : 'gray',
          transform: [{ scale: grayscaleValue }],
        },
      ]}
    >
      <ImageBackground source={require('../imgs/cardbg.png')} style={styles.backgroundImage}>
        <View style={styles.cardTop}>
          <Text style={styles.cardNumber}>{number}</Text>
          <Image source={cardImage} style={styles.cardLogo} />
        </View>
        <View style={styles.cardMiddle}></View>
        <View style={styles.cardBottom}>
          <View style={styles.cardOwner}>
            <Text style={styles.cardOwnerLabel}>Card owner</Text>
            <Text style={styles.cardOwnerName}>John Doe</Text>
          </View>
          <Text style={styles.cardExpiration}>{expiration}</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    width: 320,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 20,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  cardMiddle: {
    flex: 1,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  cardOwner: {
    alignItems: 'flex-start',
  },
  cardOwnerLabel: {
    color: '#DDD',
    fontSize: 12,
  },
  cardOwnerName: {
    fontSize: 16,
    color: '#FFF',
  },
  cardExpiration: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'flex-end',
  },
});

export default CardDetails;
