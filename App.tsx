/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PopularMovies } from './src/screens/PopularMovies';
import { TopRated } from './src/screens/TopRated';
import { FavoriteMovies } from './src/screens/FavoriteMovies';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Details } from './src/screens/Details';


// registerScreens([Details]);
const Tab = createMaterialBottomTabNavigator();
// const Stack = createNativeStackNavigator(); 


const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>

      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, color}) => {
            let icomName: string;
            if(route.name === 'PopularMovies'){
              icomName = 'autoprefixer';
              color = focused? 'black' : 'red';
            }else if(route.name === 'TopRated'){
              icomName = 'bootstrap';
              color = focused? 'black' : 'red';
            }else{
              icomName = ''
            }
            return(
              <FontAwesome5
                name={icomName}
                color={color}
              />
            )
          }
        })}
        barStyle={{backgroundColor: 'black', borderWidth: 1, borderTopColor: 'red'}}
        activeColor='red'
        inactiveColor='white'
      >
        <Tab.Screen 
          name="PopularMovies"
          component={PopularMovies}
        />
        <Tab.Screen 
          name="TopRated"
          component={TopRated}
        />
        <Tab.Screen 
          name="FavoriteMovies"
          component={FavoriteMovies}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
