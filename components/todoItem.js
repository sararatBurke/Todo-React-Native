import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function TodoItem({item, pressHandler}) {
    return(
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.task}</Text>
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