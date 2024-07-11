import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Card from '../components/Card';

const GameScreen = ({ onRestart, randomNumber, attempts, setAttempts, timeLeft, setTimeLeft, hintUsed, setHintUsed, setCurrentScreen }) => {
  const [guess, setGuess] = useState('');

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      Alert.alert('Time is up!', 'You ran out of time.');
      setCurrentScreen('tryAgain');
    }
  }, [timeLeft]);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
      return;
    }
    if (num === randomNumber) {
      Alert.alert('Congratulations!', 'You guessed the number correctly!');
      onRestart();
    } else {
      setAttempts(attempts - 1);
      if (attempts === 1) {
        Alert.alert('Game Over', 'You ran out of attempts.');
        setCurrentScreen('tryAgain');
      } else {
        Alert.alert('Try Again', `Wrong guess! You have ${attempts - 1} attempts left.`);
      }
    }
    setGuess('');
  };

  const handleHint = () => {
    if (!hintUsed) {
      setHintUsed(true);
      Alert.alert('Hint', `The number is ${randomNumber > 50 ? 'greater than 50' : 'less than or equal to 50'}.`);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>Guess a number between 1 and 100</Text>
        <Text>Attempts left: {attempts}</Text>
        <Text>Timer: {timeLeft}s</Text>
        <TextInput
          style={styles.input}
          value={guess}
          onChangeText={setGuess}
          keyboardType="numeric"
        />
        <Button title="SUBMIT GUESS" onPress={handleGuess} color="#007bff" />
        <Button title="USE A HINT" onPress={handleHint} disabled={hintUsed} color="#007bff" />
      </Card>
      <Button title="RESTART" onPress={onRestart} color="#007bff" style={styles.restartButton} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  restartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default GameScreen;
