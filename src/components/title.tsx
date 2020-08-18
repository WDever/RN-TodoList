import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
  return <Text style={styles.title}>ToDo List</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 16,
  },
});
