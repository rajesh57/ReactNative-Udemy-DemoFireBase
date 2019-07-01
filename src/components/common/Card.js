/* eslint-disable react/prop-types */

import React from 'react';
import {
    View
} from 'react-native';

const Card = (props) => {
    return (
        <View style = {cardStyles.containerStyle}> 
          {props.children}
        </View>
    );
};

const cardStyles = {

    containerStyle : {
        borderWidth :0,
        borderRadius : 0,
        borderColor : 'clear',
        borderBottomWidth :0,
        shadowColor :'clear',
        shadowOffset : {width:0 , height:0},
        shadowOpacity :0,
        marginLeft :5,
        marginRight : 5,
        marginTop :50

    }

};

export {Card};

