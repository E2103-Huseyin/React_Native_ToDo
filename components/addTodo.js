import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, Button, View, Dimensions} from 'react-native';


export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');
    const changeHandler=(val) => {
        setText(val);

    }
    return(
        <View style={styles.input}>
            <TextInput
            value={text}
            style={styles.input2}
            placeholder='new todo'
            onChangeText={changeHandler}        
            
            
            />

            <TouchableOpacity style={styles.input3} onPress={()=> submitHandler(text)}>
                <Text >Add </Text>

            </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        
        
       
        backgroundColor:'#B0BEC5',
        borderRadius:20,
        padding:20,
        margin:10,
        height:150,
        


    },
    
    
    
    input2: {

        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor:'#ECEFF1',
        borderRadius:10,
        height:40,
        // fontSize:50,        
        
        


    },
    input3: {
        flex:1,
        color:'#546E7A',
        backgroundColor:'#3d8',
        borderRadius:18,
        padding:15,        
        fontSize:25,
        alignItems:'center',
        // textAlign:'center',
        width:100,
       
    },

})