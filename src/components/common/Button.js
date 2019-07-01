/* eslint-disable react/prop-types */

import React from 'react';
import {
    Text,
    TouchableOpacity

} from 'react-native';

const Button = (onButtonPropsPress) => {

// Code Refactring 
const {buttonStyle,textStyle} = ButtonStyle

    return (
             <TouchableOpacity  onButtonPress = {onButtonPropsPress} style = {buttonStyle}>
              <Text style = {textStyle}> Log in</Text>
            </TouchableOpacity>
    );

}

const ButtonStyle = {

    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth :1 ,
        height :30,
        borderColor : '#007aff',
        marginLeft : 5,
        marginRight :5
    },
    textStyle : {
        alignSelf: 'center',
        color : '#0072ff',
        marginTop : 4,
        fontSize : 16,
        fontWeight :'300',

    }

}

export {Button};

