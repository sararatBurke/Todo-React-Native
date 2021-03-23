import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', task: 'Do HW'},
    {id: '2', task: 'Cooking'},
    {id: '3', task: 'Eating'},
    {id: '4', task: 'Do HW'},
    {id: '5', task: 'Cooking'},
    {id: '6', task: 'Eating'}
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter( todo => todo.id != id);
    })
  }

  const submitHandler = (task) => {
    setTodos((prevTodos) => {
      return[
        { task: task, id: Math.random().toString()},
        ...prevTodos, 
      ]
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  content:{
    padding:40,
    
  },

  list:{
    marginTop: 10,

  },

  item:{
    padding:30,
    backgroundColor: '#569',
    marginTop: 10,
  },

});
