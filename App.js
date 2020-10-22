import React, {useState} from 'react';
import {StyleSheet, Text, View,FlatList, ImageBackground ,KeyboardAvoidingView, SafeAreaView} from 'react-native';
import  Header  from './components/header';
import  TodoItem from './components/todoItem';
import  AddTodo from './components/addTodo';


const App = () =>  {   

    
    const [todos, setTodos] =useState( [
        // {title:'aaaa', key:"0"},
        // {title:'aaaa', key:"2"},
        
    ]);

    const pressHandler =(key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo =>todo.key !=key);
        });
        

    }

    // const pressHandler =(key) => {
    //     setTodos(() => todos.filter(todo =>todo.key !=key ))
          
    // }

    const submitHandler = (text)=> {
       setTodos ((prevTodos) => {
            return [
                { text: text, key: Math.random().toString() },
                ...prevTodos
            ];
       })
    }

    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            // behavior={Platform.OS == 'android' ? null : "padding"}
            behavior={ {padding: Platform.OS === 'ios' ? 15:10}}

        >
        
       

        <View style={styles.container}>
            
            
            <Header todos={todos}/>
            
            
            <View style={styles.content}>
            
            
            
                 
                <View style={styles.list}>
                    <FlatList
                    data={todos}
                    renderItem={({item}) => (
                        <TodoItem item={item} pressHandler={pressHandler}/>
                        // <Text>{item.text} </Text>

                        )}
                    
                    />



                </View>
                
                
                
                    <View style={styles.inp_area}>
                        < AddTodo submitHandler={submitHandler}/>
                                        
                    </View>
                
                
            </View>
            
            
        </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
        
    );
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#37474F',
        
    },
    content:{
        padding: 25,
        flex: 1,
        flexDirection:'column',
        
       
        

    },
    list:{
        marginTop: 5,
        flex: 3,

    },
    inp_area:{
        flex: 1,

    },

});


export default App