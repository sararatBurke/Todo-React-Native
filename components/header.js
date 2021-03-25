import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return(
    <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 120,
        paddingTop: 50,
        backgroundColor: '#950',
        
    },

    title:{
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});