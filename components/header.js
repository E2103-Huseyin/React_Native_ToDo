import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';


const header = ({todos}) =>  {
    
    return (
        <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={styles.headers}>

        
            <Text style={styles.title}>ToDo</Text> 
            <Text style={styles.title2}>{todos.length}</Text> 

        </ImageBackground>
        
    );
}

const styles =StyleSheet.create({
    headers:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:'#def',
        borderBottomLeftRadius:510,
        borderTopRightRadius:210,
        // width:300,
        // height:200,
        
    },
    title:{
        // textAlign:'center',
        flex:2,
        color:'coral',
        fontSize:50,
        fontWeight: 'bold',
        paddingLeft:30,

    },
    title2:{
        flex:1,
        textAlign:'right',
        justifyContent:'center',
        color:'coral',
        fontSize:40,
        fontWeight: 'bold',
        padding:20,

    },
    

});

// export { Header };
export default header
