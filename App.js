import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import TryAgainScreen from './screens/TryAgainScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hintUsed, setHintUsed] = useState(false);

  const handleStart = (enteredName, enteredEmail) => {
    setName(enteredName);
    setEmail(enteredEmail);
    setCurrentScreen('confirm');
  };

  const handleConfirm = () => {
    setCurrentScreen('game');
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
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
    setCurrentScreen('start');
  };

  const handleTryAgain = () => {
    setAttempts(4);
    setTimeLeft(60);
    setHintUsed(false);
    setCurrentScreen('game');
  };

  const handleEndGame = () => {
    setName('');
    setEmail('');
    setCurrentScreen('start');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}
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
          attempts={attempts}
          setAttempts={setAttempts}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          hintUsed={hintUsed}
          setHintUsed={setHintUsed}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'tryAgain' && (
        <TryAgainScreen onTryAgain={handleTryAgain} onEndGame={handleEndGame} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
