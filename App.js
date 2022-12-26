/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import ChatsScreen from './src/screens/ChatsScreen/ChatsScreen';
import ChatScreen from './src/screens/ChatsScreen/ChatScreen';
ChatsScreen;

Amplify.configure(config);

const App = () => {
  // Auth.signOut();

  return (
    // <SafeAreaView style={styles.root}>
    //   <Navigation />
    // </SafeAreaView>
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar barStyle={'default'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    // paddingVertical: 10,
  },
});

export default App;
