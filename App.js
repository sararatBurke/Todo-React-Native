import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {id: '1', task: 'Do HW'},
    {id: '2', task: 'Cooking'},
    {id: '3', task: 'Eating'},
    {id: '4', task: 'Do HW'},
    {id: '5', task: 'Cooking'},
    {id: '6', task: 'Eating'}
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* Todo form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <Text>Hello</Text>
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
    marginLeft: 20,
    marginTop: 50,
  },

  content:{

  },

  list:{

  },

});
