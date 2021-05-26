import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackerHome from './TrackerHome';

export default function Covid19Tracker() {
    const Stack=createStackNavigator();

    return (
        
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="TrackerHome" component={TrackerHome}/>
            </Stack.Navigator>
        
    )
}
