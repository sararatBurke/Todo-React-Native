import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function TodoItem({item}) {
    return(
    <TouchableOpacity>
        <Text style={styles.item}>{item.task}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 15,
        marginTop: 16,
        border: '1px #000 dashed',
        borderRadius: 10,
        backgroundColor: '#987',

    },

    title:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});