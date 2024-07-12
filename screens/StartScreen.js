import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import Card from '../components/Card';
import CheckBox from 'expo-checkbox';
import CustomText from '../components/CustomText';

const StartScreen = ({ onStart, name: initialName, email: initialEmail, agree: initialAgree }) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [agree, setAgree] = useState(initialAgree);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    setName(initialName);
    setEmail(initialEmail);
    setAgree(initialAgree);
  }, [initialName, initialEmail, initialAgree]);

  const validateName = () => {
    if (name.trim().length < 2) {
      setNameError('Name must be at least 2 characters long.');
      return false;
    } else if (!isNaN(name)) {
      setNameError('Name must not be a number.');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = () => {
    if (!email.includes('@')) {
      setEmailError('Email is not valid.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validate = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    return isNameValid && isEmailValid;
  };

  const handleStart = () => {
    if (validate() && agree) {
      onStart(name, email, agree);
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
      <CustomText style={styles.title}>Welcome</CustomText>
      <Card>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          onBlur={validateName}
        />
        {nameError ? <CustomText style={styles.error}>{nameError}</CustomText> : null}
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          onBlur={validateEmail}
        />
        {emailError ? <CustomText style={styles.error}>{emailError}</CustomText> : null}
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agree}
            onValueChange={setAgree}
          />
          <CustomText style={styles.label}>I am not a robot</CustomText>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#4B0082', // Indigo color for border
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
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
    marginBottom: 10,
  },
});

export default StartScreen;
