import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TodoItemModel } from 'App';
import CheckBox from '@components/checkbox';

interface Props {
  item: TodoItemModel;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}

export default function TodoItem({ item, removeTodo, toggleDone }: Props) {
  const { text, done, id } = item;

  const handleToggle = () => toggleDone(id);
  const handleRemove = () => removeTodo(id);

  return (
    <View style={styles.wrapper}>
      <CheckBox value={done} onClick={handleToggle} />
      <TouchableOpacity onPress={handleToggle}>
        <Text style={[styles.text, done && styles.markedText]}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemove}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    paddingBottom: 18,
    paddingTop: 18,
    borderBottomColor: 'rgba(37, 42, 49, 0.1)',
    borderBottomWidth: 1,
  },
  text: {
    minWidth: '70%',
    maxWidth: '70%',
    marginLeft: 18,
    marginRight: 16,
    fontSize: 18,
  },
  markedText: {
    textDecorationLine: 'line-through',
  },
});
