import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';



const jobs = (props) => {
    
    const {selectLanguage} = props.route.params;

    return (
        <SafeAreaView>
            <View>  
                <Text>{selectLanguage}</Text>
            </View>
        </SafeAreaView>
    )
}

export {jobs};