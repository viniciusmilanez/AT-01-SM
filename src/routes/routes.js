/* import 'react-native-gesture-handler'; */
import React from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/home';
import { perfil } from '../pages/perfil';
import { CameraApp } from '../pages/camera';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="4137">
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="perfil" component={perfil}></Stack.Screen>
                <Stack.Screen name="Foto" component={CameraApp}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

