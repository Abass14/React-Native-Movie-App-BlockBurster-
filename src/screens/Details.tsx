import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Card } from 'react-native-paper';
import { AppName } from '../component/mini/AppName';

type Detail = {
  title: string,
  overview: string
  poster_path: string,
  backdrop_path: string,
  original_language: string,
  vote_average: number,
  popularity: number
}

type RootStackParamList = {
  PopularMovies: {};
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const Details = ({ route }) =>{
  // const {id} = route.params
  const { movieId } = route.params;


  const [movie, setMovie] = useState({
    poster_path: "",
    original_title: "",
    overview: "",
    backdrop_path: "",
    original_language: "",
    release_date: "",
    vote_average: 0,
    popularity: 0
  });
  const [poster_path, setPosterPath] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${JSON.stringify(movieId)}?api_key=878ced4f74f38d8ebeccdcc96c9d94fb&language=en-US`);
      const json = await response.json();
      setMovie(json);
      setPosterPath(json.poster_path)
      console.log(movie)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  const screenHeight = Dimensions.get('window').height
    return(
      <ScrollView style={{height: screenHeight}}>
        <View style={styles.imageView}>
          <ImageBackground style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}}>
            <Text style={styles.backgroundTxt}>{movie.original_title}</Text>
          </ImageBackground>
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.overview}>
            {movie.overview}
          </Text>
        </View>
        <View style={styles.column}>
          <Card style={{width: 150, height: 200, margin: 15, borderRadius: 5, overflow: 'hidden'}}>
            <Image style={{width: '100%', height: 200, resizeMode: 'cover'}} source={{uri: `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}} />
          </Card>
          <View style={{justifyContent: 'space-between', margin: 15}}>
            <Text style={{color: 'black', fontWeight: '600'}}>Release Date: {movie.release_date}</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>Language: {movie.original_language}</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>Popularity: {movie.popularity}</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>Rating: {movie.vote_average}</Text>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({

    imageView: {
      width: '100%',
      height: 400
    },
    image:{
      width: '100%',
      flex: 1, 
      resizeMode: 'cover'
    },
    detailsView: {
    },
    backgroundTxt: {
      color: 'white',
      fontWeight: '800',
      fontSize: 45,
      marginHorizontal: 15,
      marginTop: 20
    },
    overview:{
      color: 'black',
      fontSize: 16,
      margin: 15
    },
    column:{
      flexDirection: 'row'
    }
})