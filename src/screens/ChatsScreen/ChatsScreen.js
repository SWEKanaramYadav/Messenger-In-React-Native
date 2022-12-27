import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ChatListItem from '../../components/ChatListItem';
import Chat from '../../../assets/data/chats.json';

const ChatsScreen = () => {
  return (
    <FlatList
      data={Chat}
      renderItem={({ item, index }) => <ChatListItem chat={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

const styles = StyleSheet.create({});

export default ChatsScreen;
