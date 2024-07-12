import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#D3D3D3', // Light grey background for card
    width: '80%', // To make sure card takes a good width
  },
});

export default Card;
