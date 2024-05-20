import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ExtraBold, Regular, SemiBold} from '../../../assets/fonts/font.index';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function _login_main() {
  const navigation = useNavigation();
  const Theme = useSelector(state => state._selected_theme);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  //********************************************* Styles ***********************************************//

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.BackgroundColor,
    },
    logo: {
      height: 300,
      width: 300,
      tintColor: Theme.Text,
    },
    login_text: {
      color: Theme.Text,
      fontSize: 35,
      fontFamily: ExtraBold,
    },
    textinput_container: {
      width: '85%',
      marginVertical: 15,
    },
    textinput: {
      height: 45,
      width: '100%',
      backgroundColor: Theme.BackgroundColor,
      borderRadius: 8,
      marginVertical: 12,
      fontFamily: Regular,
      fontSize: 18,
      color: Theme.Text,
      textAlign: 'center',
      elevation: 30,
      shadowColor: Theme.Text,
      borderWidth: 0.3,
      borderColor: Theme.Text,
    },
    login_btn: {
      width: '50%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme.Text,
      borderRadius: 25,
    },
    login_btn_text: {
      color: Theme.BackgroundColor,
      fontSize: 22,
      fontFamily: SemiBold,
    },
  });

  //********************************************* Validation ***********************************************//

  const _user_login = async () => {
    if (username.length === 0) {
      Toast.show('Please Enter Your Username.', Toast.LONG);
    } else if (username.length < 4) {
      Toast.show('Username must be at least 4 characters.', Toast.LONG);
    } else if (username !== 'Ravirajkatkar') {
      Toast.show('Please Enter Valid Username.', Toast.LONG);
    } else if (password.length === 0) {
      Toast.show('Please Enter Your Password.', Toast.LONG);
    } else if (password.length < 4) {
      Toast.show('Password must be at least 4 characters.', Toast.LONG);
    } else if (password !== '1234567890') {
      Toast.show('Please Enter Valid Password.', Toast.LONG);
    } else {
      Toast.show('Login Successfully', Toast.LONG);
      await AsyncStorage.setItem('is_login', '1');
      navigation.reset({
        index: 0,
        routes: [{name: '_bottom_navigation'}],
      });
    }
  };
  //********************************************* Design ***********************************************//

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={Theme.StatusBar} />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/_tranperant_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.login_text}>Login</Text>
        <View style={styles.textinput_container}>
          <TextInput
            style={styles.textinput}
            placeholder="Enter Your Username"
            placeholderTextColor={Theme.Text}
            value={username}
            onChangeText={text => setUsername(text.replace(/\s/g, ''))}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Enter Your Password"
            secureTextEntry
            placeholderTextColor={Theme.Text}
            value={password}
            onChangeText={text => setPassword(text.replace(/\s/g, ''))}
          />
        </View>
        <TouchableOpacity
          style={styles.login_btn}
          onPress={() => _user_login()}>
          <Text style={styles.login_btn_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
