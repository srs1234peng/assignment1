import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStart = (enteredName, enteredEmail) => {
    setName(enteredName);
    setEmail(enteredEmail);
    setCurrentScreen('confirm');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}
      {/* Future screens like ConfirmScreen will be added here */}
      {currentScreen === 'confirm' && (
        <ConfirmScreen
          name={name}
          email={email}
          onEdit={() => setCurrentScreen('start')}
          onConfirm={() => setCurrentScreen('success')}
          visible={true}
        />
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
