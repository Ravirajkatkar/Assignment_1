import React from 'react';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import _spalsh_screen from '../screens/authentication_screen/spalsh.index';
import _login_main from '../screens/authentication_screen/login.index';
import _bottom_navigation from './bottom_tab.index';

const Stack = createNativeStackNavigator();
export default function _stack_Navigation() {
  const navigation = useNavigation();
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['warning:....']);

  return (
    <Stack.Navigator
      initialRouteName={'_spalsh_screen'}
      screenOptions={{
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        name="_spalsh_screen"
        component={_spalsh_screen}
        options={{title: '', headerShown: false}}
      />
      <Stack.Screen
        name="_login_main"
        component={_login_main}
        options={{title: '', headerShown: false}}
      />
      <Stack.Screen
        name="_bottom_navigation"
        component={_bottom_navigation}
        options={{title: '', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
