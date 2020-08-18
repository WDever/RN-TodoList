/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from '@components/title';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <View style={styles.body}>
      <Title />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default App;
