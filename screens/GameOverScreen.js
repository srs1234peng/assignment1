import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = ({ reason, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>The game is over!</Text>
        <Image
          source={require('../assets/sad_smiley.png')}
          style={styles.image}
        />
        <Text>You are {reason}</Text>
        <Button title="Restart" onPress={onRestart} color="#007bff" />
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

export default GameOverScreen;
