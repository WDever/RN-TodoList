import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { TodoItemModel } from 'App';
import TodoItem from './todoItem';

interface Props {
  list: TodoItemModel[];
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}

export default function TodoList({ list, toggleDone, removeTodo }: Props) {
  return (
    <FlatList
      style={styles.list}
      data={list}
      renderItem={({ item }) => (
        <TodoItem
          key={item.id}
          item={item}
          removeTodo={removeTodo}
          toggleDone={toggleDone}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: 340,
  },
});
