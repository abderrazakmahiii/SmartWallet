// components/CardIndicator.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardIndicator = ({ selected }) => {
  return <View style={[styles.dot, selected ? styles.selectedDot : null]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    margin: 4,
  },
  selectedDot: {
    backgroundColor: '#8000FF',
  },
});

export default CardIndicator;
