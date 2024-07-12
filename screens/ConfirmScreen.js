import React from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Card from '../components/Card';

const ConfirmScreen = ({ name, email, onEdit, onConfirm, visible }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <Card>
          <Text style={styles.title}>Hello {name}</Text>
          <Text>Here is the email that you entered:</Text>
          <Text>{email}</Text>
          <Text>If it is not correct, please go back and enter again.</Text>
          <View style={styles.buttonContainer}>
            <Button title="GO BACK" onPress={onEdit} color="#c2185b" />
            <Button title="CONTINUE" onPress={onConfirm} color="#007bff" />
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default ConfirmScreen;
