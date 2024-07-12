import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Image } from 'react-native';
import Card from '../components/Card';

const GameScreen = ({
  onRestart,
  randomNumber,
  setRandomNumber,
  attempts,
  setAttempts,
  timeLeft,
  setTimeLeft,
  hintUsed,
  setHintUsed,
  handleEndGame // Receive handleEndGame as a prop
}) => {
  const [guess, setGuess] = useState('');
  const [gameState, setGameState] = useState('playing'); // 'playing', 'tryAgain', 'correctGuess', 'gameOver'

  useEffect(() => {
    if (timeLeft > 0 && gameState === 'playing') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      Alert.alert('Time is up!', 'You ran out of time.');
      setGameState('gameOver');
    }
  }, [timeLeft, gameState]);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      Alert.alert('Invalid Input', 'Please enter a valid number.');
      return;
    }
    if (num === randomNumber) {
      Alert.alert('Congratulations!', 'You guessed the number correctly!');
      setGameState('correctGuess');
    } else {
      setAttempts(attempts - 1);
      if (attempts === 1) {
        Alert.alert('Game Over', 'You ran out of attempts.');
        setGameState('tryAgain');
      } else {
        Alert.alert('Try Again', `Wrong guess! You have ${attempts - 1} attempts left.`);
        setGuess('');
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

  const handleTryAgain = () => {
    setAttempts(4);
    setTimeLeft(60);
    setHintUsed(false);
    setGameState('playing');
  };

  const handleNewGame = () => {
    setRandomNumber(16); // Set fixed value for testing
    handleTryAgain();
  };

  const handleExitToGameOver = () => {
    setGameState('gameOver');
  };

  if (gameState === 'tryAgain') {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>You did not guess correctly!</Text>
          <View style={styles.buttonContainer}>
            <Button title="Try Again" onPress={handleTryAgain} color="#007bff" />
            <Button title="Exit" onPress={handleExitToGameOver} color="#007bff" />
          </View>
        </Card>
      </View>
    );
  }

  if (gameState === 'correctGuess') {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>You guessed correct!</Text>
          <Text>Attempts used: {4 - attempts}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
            style={styles.image}
          />
          <Button title="New Game" onPress={handleNewGame} color="#007bff" />
        </Card>
      </View>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>The game is over!</Text>
          <Image
            source={require('../assets/sad_smiley.png')}
            style={styles.image}
          />
          <Text>{timeLeft <= 0 ? 'You ran out of time.' : 'You ran out of attempts.'}</Text>
          <Button title="Restart" onPress={onRestart} color="#007bff" />
        </Card>
      </View>
    );
  }

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
          editable={attempts > 0}
        />
        <Button title="SUBMIT GUESS" onPress={handleGuess} color="#007bff" disabled={attempts <= 0} />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default GameScreen;
