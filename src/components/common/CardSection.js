/* eslint-disable react/prop-types */


import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {

    return (
        <View style = {cardSectionStyle.containerStyle}> 
           {props.children}
        </View>
    );

};

const cardSectionStyle = {

    containerStyle : {
        borderBottomWidth : 0,
        padding : 5,
        justifyContent :'flex-start',
        flexDirection : 'row',
        borderColor :'clear',
        position :'relative',

    }

};

export {CardSection}; // Don't use default key if using export * syntax


