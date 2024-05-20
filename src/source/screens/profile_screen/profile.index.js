import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {ExtraBold, SemiBold} from '../../../assets/fonts/font.index';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function _profile_screen() {
  const navigation = useNavigation();
  const Theme = useSelector(state => state._selected_theme);

  //********************************************* Function ***********************************************//

  const userLogout = () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => navigation.replace('_spalsh_screen'));
  };

  //********************************************* Style ***********************************************//

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.BackgroundColor,
      paddingVertical: 25,
    },
    logo: {
      height: 300,
      width: 300,
      tintColor: Theme.Text,
    },
    heading_text: {
      color: Theme.Text,
      fontSize: 25,
      fontFamily: ExtraBold,
      textAlign: 'center',
    },
    logout_btn: {
      height: 45,
      width: '50%',
      backgroundColor: Theme.Text,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
    },
    logout_text: {
      color: Theme.BackgroundColor,
      fontSize: 20,
      fontFamily: SemiBold,
      textAlign: 'center',
    },
  });

  //********************************************* Design ***********************************************//

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} backgroundColor={Theme.StatusBar} />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/_tranperant_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.heading_text}>Upcoming...</Text>
        <TouchableOpacity
          style={styles.logout_btn}
          onPress={() => userLogout()}>
          <Text style={styles.logout_text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
