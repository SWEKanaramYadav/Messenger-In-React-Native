/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import ChatListItem from './src/components/ChatListItem';
ChatListItem;

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  const chat = {
    id: '1',
    user: {
      id: 'u2',
      name: 'Lukas',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
      status: 'Hey there!',
    },
    lastMessage: {
      id: 'm1',
      text: 'Well done this sprint, guys!',
      createdAt: '2022-10-14T13:30:00.000Z',
    },
  };
  return (
    // <SafeAreaView style={styles.root}>
    //   <Navigation />
    // </SafeAreaView>
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar barStyle={'default'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTxt: {
    color: '#000',
  },
});

export default App;
