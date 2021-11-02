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
import { Card } from 'react-native-paper';

type Title = {
    title: string,
    date: string,
    image: string,
    handleMovieClick: () => void,
    handleSaveMovie: () => void
}

export const MovieCard = (props: Title) =>{
    return(
        <Pressable onPress={props.handleMovieClick}>
            <Card style={styles.card}>
                <View style={styles.viewImage}>
                    <Image style={{width: '100%', flex: 1, resizeMode: 'contain'}} source={{uri: props.image}} />
                </View>
                <View style={styles.viewText}>
                    <View style={{justifyContent: 'space-evenly'}}>
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                        <Text style={styles.text}>{props.date}</Text>
                    </View>
                    <View style={{justifyContent: 'flex-end'}}>
                        <Pressable style={styles.button} onPress={props.handleSaveMovie}>
                            <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </Card>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 300,
        alignItems: 'stretch',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        overflow: 'hidden'
    },
    viewImage: {
        flex: 4,
        width: '100%',
        alignItems: 'stretch',
        backgroundColor: 'black'
    },
    viewText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 15,
        color: 'white',
        marginLeft: 15
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginLeft: 15,
        width: 150,
    },
    button:{
        width: 50,
        height: 30,
        backgroundColor: 'red',
        marginRight: 15,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 5
    }

})