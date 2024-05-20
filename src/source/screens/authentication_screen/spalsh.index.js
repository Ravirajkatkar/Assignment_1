import React from 'react';
import {Image, StatusBar, Dimensions, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');

export default function _spalsh_screen() {
  const navigation = useNavigation();
  const Theme = useSelector(state => state._selected_theme);

  //********************************************* Functions ***********************************************//

  setTimeout(async () => {
    const login = await AsyncStorage.getItem('is_login');
    if (login == '1') {
      navigation.replace('_bottom_navigation');
    } else {
      navigation.replace('_login_main');
    }
  }, 2000);

  //********************************************* Styles ***********************************************//

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.BackgroundColor,
    },
    logo: {
      height: height / 2.3,
      width: width - 20,
      tintColor: Theme.Text,
    },
  });

  //********************************************* Design ***********************************************//

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor={Theme.StatusBar} />
      <Image
        resizeMode="contain"
        source={require('../../../assets/images/_tranperant_logo.png')}
        style={styles.logo}
      />
    </View>
  );
}
