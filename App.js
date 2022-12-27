/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();

  return (
    // <SafeAreaView style={styles.container}>
    //   <Navigator />
    // </SafeAreaView>
    <View style={styles.container}>
      <Navigator />
      {/* <StatusBar barStyle={'default'} /> */}
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
