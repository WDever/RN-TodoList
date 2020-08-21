import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Button,
  View,
} from 'react-native';

interface Props {
  addTodo: (text: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [input, setInput] = useState<string>('');
  const handleInput = (text: string) => setInput(text);
  const handleSubmit = () => {
    addTodo(input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInput}
        value={input}
        onSubmitEditing={handleSubmit}
        placeholder="Write down what you have to do"
      />
      <Button title="Add" color="#4470ff" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
  },
  input: {
    width: '100%',

    borderBottomColor: '#123',
    borderBottomWidth: 1,

    marginVertical: 8,
  },
});
