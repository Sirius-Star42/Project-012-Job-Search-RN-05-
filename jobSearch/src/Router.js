import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Introduction, SavedJobs, jobs} from './pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Intro" component={Introduction}/>
                <Stack.Screen name="Jobs" component={jobs}/>
                <Stack.Screen name="SavedJobs" component={SavedJobs}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;