import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const TextBox = () => {
    return(
        <TextInput 
            style={styles.result}
            placeholder = "0"
            />
    )
}

export default TextBox;

const styles = StyleSheet.create({
    

    result: {
        marginTop:70,
        borderWidth: 2,
        color:'black',
        margin:10,
        padding:6,
        fontSize:40,
        textAlign: 'right'

    }

})