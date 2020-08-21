import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

interface Props {
  value: boolean;
  onClick?: (value: boolean) => void;
  disabled?: boolean;
}

export default function CheckBox({ value, onClick, disabled }: Props) {
  const handlePress = () => {
    if (onClick === undefined) {
      return;
    }

    onClick(value);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[styles.checkbox, value ? styles.checked : styles.unChecked]}>
        <Text style={styles.mark}>{value ? 'X' : ''}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    width: 24,
    height: 24,
  },

  checked: {
    backgroundColor: '#4470ff',
    borderColor: '#4470ff',
  },

  unChecked: {
    backgroundColor: 'transparent',
  },

  mark: {
    color: '#ffffff',
  },
});
