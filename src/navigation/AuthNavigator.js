import React, { useState, useEffect } from 'react';
import {Text, Image, View, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import CodeScreen from '../screens/CodeScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const  AuthStack = (props, setIsLogin) => {

    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    gestureEnabled: false
                }}
            />

            <Stack.Screen name="CodeScreen">
                {props => <CodeScreen {...props} setIsLogin={setIsLogin} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}


const AuthNavigator = (props) => {
    const isLogin = props.setIsLogin
    return (
        <Stack.Navigator
            initialRouteName={props.initialRouteName}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}
        >
            <Stack.Screen name="AuthStack">
                {props => AuthStack(props, isLogin)}
            </Stack.Screen>
        </Stack.Navigator>
    );
};


export default AuthNavigator;
