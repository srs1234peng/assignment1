import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Card from '../components/Card';

const CorrectGuessScreen = ({ attempts, randomNumber, onNewGame }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>You guessed correct!</Text>
        <Text>Attempts used: {4 - attempts}</Text>
        <Image
          source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
          style={styles.image}
        />
        <Button title="New Game" onPress={onNewGame} color="#007bff" />
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
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default CorrectGuessScreen;
