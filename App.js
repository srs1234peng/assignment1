import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [randomNumber, setRandomNumber] = useState(16); // Set fixed value for testing
  const [attempts, setAttempts] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hintUsed, setHintUsed] = useState(false);

  const handleStart = (enteredName, enteredEmail, agreed) => {
    setName(enteredName);
    setEmail(enteredEmail);
    setAgree(agreed);
    setCurrentScreen('confirm');
  };

  const handleConfirm = () => {
    setCurrentScreen('game');
    setRandomNumber(16); // Set fixed value for testing
    setAttempts(4);
    setTimeLeft(60);
    setHintUsed(false);
  };

  const handleEdit = () => {
    setCurrentScreen('start');
  };

  const handleRestart = () => {
    setName('');
    setEmail('');
    setAgree(false);
    setCurrentScreen('start');
  };

  const handleTryAgain = () => {
    setAttempts(4);
    setTimeLeft(60);
    setHintUsed(false);
    setCurrentScreen('game');
  };

  const handleEndGame = () => {
    setCurrentScreen('gameOver');
  };

  const handleNewGame = () => {
    setRandomNumber(16); // Set fixed value for testing
    handleTryAgain();
  };

  return (
    <LinearGradient
      colors={['#87CEEB', '#4B0082']}
      style={styles.gradient}>
      {currentScreen === 'start' && (
        <StartScreen
          onStart={handleStart}
          name={name}
          email={email}
          agree={agree}
        />
      )}
      {currentScreen === 'confirm' && (
        <ConfirmScreen
          name={name}
          email={email}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
          visible={true}
        />
      )}
      {currentScreen === 'game' && (
        <GameScreen
          onRestart={handleRestart}
          randomNumber={randomNumber}
          setRandomNumber={setRandomNumber}
          attempts={attempts}
          setAttempts={setAttempts}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          hintUsed={hintUsed}
          setHintUsed={setHintUsed}
          setCurrentScreen={setCurrentScreen}
          handleEndGame={handleEndGame} // Pass handleEndGame function
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
