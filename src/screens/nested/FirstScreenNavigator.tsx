import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { PopularMovies } from '../PopularMovies';
import { Details } from '../Details';

const Stack = createStackNavigator()

export const FirstScreenNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                header: () => null  //To remove all default toolbars on all Screens
            }}
        >
            <Stack.Screen
                name="PopularMovies"
                component={PopularMovies}
                
            />
            <Stack.Screen
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    )
}