import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const TryAgainScreen = ({ onTryAgain, onEndGame }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>You did not guess correctly!</Text>
        <View style={styles.buttonContainer}>
          <Button title="TRY AGAIN" onPress={onTryAgain} color="#007bff" />
          <Button title="END THE GAME" onPress={onEndGame} color="#007bff" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default TryAgainScreen;
