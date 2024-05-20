import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ExtraBold, SemiBold} from '../../../assets/fonts/font.index';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');

export default function _movies_screen() {
  const navigation = useNavigation();
  const Theme = useSelector(state => state._selected_theme);
  const [_movies, setMovies] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  //********************************************* API Call ***********************************************//

  React.useEffect(() => {
    const getMovieList = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (response.ok) {
          const data = await response.json();
          // console.log('Movies:', data);
          setMovies(data);
          setloading(false);
        } else {
          console.error('Failed to fetch movies:', response.status);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getMovieList();
  }, []);

  //********************************************* Styles ***********************************************//

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.BackgroundColor,
      paddingVertical: 25,
    },
    heading_text: {
      color: Theme.Black,
      fontSize: 25,
      fontFamily: ExtraBold,
      textAlign: 'center',
    },
    rating_text: {
      color: Theme.Black,
      fontSize: 20,
      fontFamily: SemiBold,
    },
    card: {
      height: height / 1.3,
      width: width / 1.1,
      backgroundColor: '#fff',
      borderRadius: 8,
      justifyContent: 'center',
      paddingHorizontal: 5,
      overflow: 'hidden',
      elevation: 10,
      margin: 1,
      marginTop: 10,
      alignItems: 'center',
      marginStart: '5%',
    },
  });

  //********************************************* Design ***********************************************//

  if (loading == true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={Theme.Text} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={Theme.StatusBar} />
      <View style={styles.container}>
        <Carousel
          loop
          width={width}
          height={height}
          style={{
            paddingHorizontal: 20,
            marginVertical: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          data={_movies}
          scrollAnimationDuration={1000}
          renderItem={({item, index, animationValue}) => {
            const maskStyle = useAnimatedStyle(() => {
              const backgroundColor = interpolateColor(
                animationValue.value,
                [-1, 0, 1],
                ['#000000dd', 'transparent', '#000000dd'],
              );
              return {
                backgroundColor,
              };
            }, [animationValue]);

            return (
              <View key={index} style={styles.card}>
                <Animated.View
                  pointerEvents="none"
                  style={[
                    {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                    },
                    maskStyle,
                  ]}>
                  <Pressable
                    style={{
                      height: 400,
                      borderRadius: 10,
                      width: '100%',
                      marginHorizontal: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                    onPress={() => Linking.openURL('https://www.google.com')}>
                    <ImageBackground
                      source={{
                        uri: 'https://i.pinimg.com/736x/0f/df/3b/0fdf3b6e0c10fab75fbbf306f8a239aa.jpg',
                      }}
                      style={{
                        height: '100%',
                        borderRadius: 10,
                        width: '100%',
                        marginHorizontal: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                      <Text style={[styles.heading_text, {color: '#fff'}]}>
                        No Image
                      </Text>
                    </ImageBackground>
                  </Pressable>
                  <Text
                    onPress={() => Linking.canOpenURL('https://www.google.com')}
                    style={styles.heading_text}>
                    {item.movie}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.rating_text}>
                      Rating : {item.rating}
                    </Text>
                    <Image
                      source={require('../../../assets/images/_starr.png')}
                      style={{
                        height: 25,
                        width: 25,
                        marginStart: 10,
                      }}
                    />
                  </View>
                </Animated.View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
