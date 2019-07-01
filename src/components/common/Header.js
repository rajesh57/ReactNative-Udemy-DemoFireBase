/* eslint-disable react/prop-types */

// Import the library for maikng the component 
import React from 'react';
import { Text,View } from 'react-native';


// Make a component 
// This is Child component passing the props and changing the vaalues dynamically.
// This is Functional based component.
const Header = (props) => {
        return (
            <View style = {styles.viewStyle}>
                <Text style = {styles.textStyle}> {props.HeaderText} </Text> 
            </View>
        );
    
}



const styles = {
    viewStyle: {
        backgroundColor : 'green',
        justifyContent : 'center', // Flex box propertys here
        alignItems : 'center',
        height : 60,
        paddingTop : 20,
        shadowColor : '#000',
        shadowOffset : {width :0, height :4},
        shadowOpacity : 0.5,
        elevation : 2,
        position : 'relative'
    },
    textStyle: {
        fontSize: 20
    }

}

//export - Make the component available other parts of the App.
export {Header}; // Don't use default key if using export * syntax
