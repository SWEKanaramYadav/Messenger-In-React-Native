import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.log('New Message', newMessage);

    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      {/*  Icon */}
      <MaterialIcons name="add" size={24} color="royalblue" />
      {/* Text Input */}
      <TextInput
        style={styles.input}
        name="message"
        placeholder="Type your message..."
        placeholderTextColor={'gray'}
        value={newMessage}
        onChangeText={setNewMessage}
      />
      {/* Send Icon */}
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    color: 'gray',
    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default InputBox;
