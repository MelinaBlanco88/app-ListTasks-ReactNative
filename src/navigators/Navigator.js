import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TaskList from '../screens/TaskList'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TaskList" component={TaskList} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator