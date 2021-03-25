import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function TodoItem({item, deleteHandler}) {
    return(
    <TouchableOpacity >
        <Text style={styles.item}>{item.task}</Text>
        <Button
            onPress={() => deleteHandler(item.id)} 
            title='add todo' 
            color='coral'
        />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 15,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#987',

    },

    title:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});