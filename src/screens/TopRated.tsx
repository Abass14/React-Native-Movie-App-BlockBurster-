import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Alert
} from 'react-native';
import { MovieCard } from '../component/major/MovieCard';

export const TopRated = () =>{

  const [movie, setMovie] = useState([]);
  const handleClick = () => {
    Alert.alert('should navigate')
  }
  const handleSave = () => {
    Alert.alert('should save')
  }

  const getMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=878ced4f74f38d8ebeccdcc96c9d94fb&language=en-US&page=1');
      const json = await response.json();
      setMovie(json.results);
      console.log(movie)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

    return(
      <View style={styles.view}>
          <View style={styles.textView}>
            <Text style={styles.header}>Top Rated Screen</Text>
          </View>
          <View style={styles.cardStyle}>
            <FlatList 
              style={{width: '100%'}}
              keyExtractor={(item: any, index: number)=>index.toString()}
              data={movie}
              renderItem={theMovie =>(
                <View style={{margin: 10}}>
                  <MovieCard 
                    title={theMovie.item.title}
                    date={theMovie.item.release_date} 
                  image={`https://image.tmdb.org/t/p/w342${theMovie.item.poster_path}`}
                    handleMovieClick={handleClick}
                    handleSaveMovie={handleSave}
                  />
                </View>
                )
              }
            />
          </View>
      </View>
        
    )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: 'black'
    },
    textView:{
      marginTop: 40
    },
    header:{
      fontSize: 30,
      fontWeight: '600',
      marginLeft: 20,
      color: 'white'
    },
    cardStyle:{
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20
    },
})