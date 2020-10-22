import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const todoItem = ({item, pressHandler}) =>  {
    return (
        <TouchableOpacity onPress={() =>pressHandler(item.key)}>

            <Text style={styles.item}>{item.text}</Text>

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    item:{
        padding:10,
        marginTop: 6,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor:'#546E7A',
        color:'white',
        fontSize:25,
        

    }
})


export default todoItem
