
import React from 'react';
import { View , ActivityIndicator}  from 'react-native';

const Spinner = ({size}) => {

    return (
        <View style = {SpinnerStyle.activityInicatorStyle }>
            <ActivityIndicator  size  = {size || 'large'}/>
        </View>
    );

}

const SpinnerStyle  = {

    activityInicatorStyle: {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        colour : 'red'
    }
}

export {Spinner};

