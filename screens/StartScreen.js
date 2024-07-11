import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Checkbox from 'expo-checkbox';

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    let valid = true;

    if (name.trim().length < 2) {
      setNameError('Name must be at least 2 characters long.');
      valid = false;
    } else if (!isNaN(name)) {
      setNameError('Name must not be a number.');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email.includes('@')) {
      setEmailError('Email is not valid.');
      valid = false;
    } else {
      setEmailError('');
    }

    return valid;
  };

  const handleStart = () => {
    if (validate() && agree) {
      onStart(name, email);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setAgree(false);
    setNameError('');
    setEmailError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Card>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
        <Input
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agree}
            onValueChange={setAgree}
            color={agree ? '#4630EB' : undefined}
          />
          <Text style={styles.label}>I am not a robot</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="RESET" onPress={handleReset} color="#c2185b" />
          <Button title="START" onPress={handleStart} disabled={!agree} />
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
  },
});

export default StartScreen;
