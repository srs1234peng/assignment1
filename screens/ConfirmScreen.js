import React from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Card from '../components/Card';
import CustomText from '../components/CustomText';

const ConfirmScreen = ({ name, email, onEdit, onConfirm, visible }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <Card>
          <CustomText style={styles.title}>Hello {name}</CustomText>
          <CustomText>Here is the email that you entered:</CustomText>
          <CustomText>{email}</CustomText>
          <CustomText>If it is not correct, please go back and enter again.</CustomText>
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
