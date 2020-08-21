/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Title from '@components/title';
import TodoInput from '@components/todoInput';
import TodoList from '@components/todoList';

export interface TodoItemModel {
  id: string;
  text: string;
  done: boolean;
}

const App = () => {
  const [list, setList] = useState<TodoItemModel[]>([
    {
      id: '1',
      text: 'item1',
      done: true,
    },
    {
      id: '2',
      text: 'item2',
      done: false,
    },
  ]);

  const toggleDone = (id: string) =>
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );

  const addTodo = (text: string) => {
    const id = list.length ? String(Number(list[list.length - 1].id) + 1) : '1';
    const item: TodoItemModel = {
      id,
      text,
      done: false,
    };

    setList(list.concat(item));
  };

  const removeItem = (id: string) =>
    setList((list) => list.filter((item) => item.id !== id));

  return (
    <SafeAreaView style={styles.body}>
      <Title />
      <TodoInput addTodo={addTodo} />
      <TodoList list={list} removeTodo={removeItem} toggleDone={toggleDone} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',

    flex: 1,
  },
});

export default App;
