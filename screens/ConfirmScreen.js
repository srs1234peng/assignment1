// If the user hit confirm, navigate to confirm the information
import React from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import Card from '../components/Card';


const ConfirmScreen = ({ name, email, onEdit, onConfirm, visible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
        <View style={styles.centeredView}>
          <Card>
            <Text style={styles.title}>Hello {name}</Text>
            <Text>Here is the email that you entered: {email}</Text>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#3f51b5',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ConfirmScreen;
