import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Homepage from './pages/Homepage.js'
import RegisterPage from './pages/RegisterPage.js'
import ReviewPage from './pages/ReviewPage.js'
import UserListPage from './pages/UserListPage.js'
import EditUserPage from './pages/EditUserPage.js'

const Stack = createNativeStackNavigator();

export default function Dashboard(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage}></Stack.Screen>
                <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
                <Stack.Screen name="Review" component={ReviewPage}></Stack.Screen>
                <Stack.Screen name="UserList" component={UserListPage}></Stack.Screen>
                <Stack.Screen name="EditUser" component={EditUserPage}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}